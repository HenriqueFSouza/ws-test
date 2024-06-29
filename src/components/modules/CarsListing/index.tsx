
import { CarsListItem } from '../../../@types'
import { getBrandName } from '../../../utils/getBrandName'
import './styles.css'

type Props = {
  carsList: Record<number, CarsListItem[]>
}
export default function CarsListing({ carsList }: Props) {
  console.log(Object.entries(carsList))
  return (
    <div className="cars-cards-container">
      <div className='cars-cards-wrapper'>
        {Object.entries(carsList) &&
          Object.entries(carsList).length > 0 ?
          Object.entries(carsList).map(([brand, cars]) => (
            <div key={brand} className='car-card'>
              <h2 className="brand">{getBrandName(Number(brand))}</h2>
              <ul className="carslist-container">
                {cars && cars.map((car) => (
                  <li key={car.id}>{car.nome_modelo} - {car.ano} - {car.cor}</li>
                ))}
                {!cars && (
                  <li>Ainda não existe carros desta marca</li>
                )}
              </ul>
            </div>
          )) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <h3>Nenhum carro encontrado. Cadastre um novo
                {' '}
                <a href='/novo-carro'>Aqui</a>
              </h3>
            </div>
          )}
      </div>
    </div>
  )
}