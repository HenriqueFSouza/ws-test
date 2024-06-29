
import { useCarsList } from '../../../hooks/CarsListContext'
import CarsListing from '../../modules/CarsListing'
import './styles.css'
export default function CarsList() {
  const { carsList } = useCarsList()

  return (
    <div className="carslist-wrapper">
      <CarsListing carsList={carsList} />
    </div>
  )
}