import React from 'react';
import './styles.css';
import { CarsListItem } from '../../../@types';
import { useCarsList } from '../../../hooks/CarsListContext';
import { brandsList } from '../../../utils/getBrandName';
import { emptyCarState } from '../../../consts/emptyCarState';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../../utils/fomartCurrency';


export default function NewCar() {
  const { addCars, carsList } = useCarsList();
  const [carData, setCarData] = React.useState(emptyCarState);
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "valor") {
      const formattedValue = formatCurrency(value);
      setCarData({ ...carData, [name]: formattedValue });
    } else {
      setCarData({ ...carData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericValue = parseFloat(carData.valor.toString().replace(/[^\d,]/g, '').replace(',', '.'));
    const numericYear = parseInt(carData.ano.toString(), 10);

    const newCar: CarsListItem = {
      ...carData,
      brand: Number(carData.brand),
      timestamp_cadastro: new Date().valueOf(),
      valor: numericValue,
      ano: numericYear
    };


    const updatedCarsList = {
      ...carsList,
      [newCar.brand]: [...(carsList[newCar.brand] || []), newCar],
    };

    addCars(Object.values(updatedCarsList).flat());
    setCarData(emptyCarState);
    navigate('/')
  };


  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h3>Preencha os dados: </h3>

        <form onSubmit={handleSubmit}>

          <label>Nome:</label>
          <input
            type="text"
            name="nome_modelo"
            value={carData.nome_modelo}
            onChange={handleChange}
            placeholder="Nome do Modelo"
            required
          />

          <label>Ano:</label>
          <input
            type="number"
            name="ano"
            value={carData?.ano ?? 0}
            onChange={handleChange}
            placeholder="Ano"
            required
          />

          <label>Cor:</label>
          <input
            type="text"
            name="cor"
            value={carData.cor}
            onChange={handleChange}
            placeholder="Cor"
            required
          />

          <label>Combustível:</label>
          <select
            name="combustivel"
            value={carData.combustivel}
            onChange={handleChange}
            required>

            <option value="Gasolina">
              Gasolina
            </option>
            <option value="Álcool">
              Álcool
            </option>
            <option value="Flex">
              Flex
            </option>
          </select>

          <label>Marca:</label>
          <select name="brand" value={carData.brand} onChange={handleChange} required>
            {Object.entries(brandsList).map(([id, name]) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          <label>Valor:</label>
          <input
            type="text"
            name="valor"
            value={carData.valor}
            onChange={handleChange}
            placeholder="R$"
            required
          />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}


