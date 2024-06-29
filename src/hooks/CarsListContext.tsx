import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import { CarsListItem } from '../@types'

interface CartContextType {
  carsList: Record<number, CarsListItem[]>;
  addCars: (data: CarsListItem[]) => void;
}
const AppContext = createContext({} as CartContextType)

type Props = {
  children: JSX.Element
}

export const Provider = ({ children }: Props) => {
  const [carsList, setCarsList] = useState<Record<number, CarsListItem[]> | {}>({});

  const addCars = async (data: CarsListItem[]) => {

    const parsedList = groupCarsByBrand(data)
    setCarsList(parsedList)

    await localStorage.setItem('carsListApp:data', JSON.stringify(parsedList))
  }

  const groupCarsByBrand = (cars: CarsListItem[]): Record<number, CarsListItem[]> => {
    return cars.reduce<Record<number, CarsListItem[]>>((acc, car) => {
      if (!acc[car.brand]) {
        acc[car.brand] = [];
      }
      acc[car.brand].push(car);
      return acc;
    }, {});
  };

  useEffect(() => {
    const loadCarsListData = async () => {
      const previousData = await localStorage.getItem('carsListApp:data')

      if (previousData) {
        setCarsList(JSON.parse(previousData));
        return;
      }

      try {
        const response = await api.get('/cars.json');
        const groupedCars = groupCarsByBrand(response.data);
        setCarsList(groupedCars);
      } catch (error) {
        console.log('error', error);
        setCarsList(groupCarsByBrand([]))
      }

    }

    loadCarsListData()
  }, [])

  return (
    <AppContext.Provider value={{ addCars, carsList }}>
      {children}
    </AppContext.Provider>
  )
}

export const useCarsList = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useCarsList must be used with context')
  }

  return context
}
