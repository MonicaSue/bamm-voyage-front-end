//css
import styles from './Itineraries.module.css'
import ItineraryCard from '../../components/ItineraryCard/ItineraryCard'

const Itineraries = (props) => {
  return (
    <main>
      {props.itineraries.map(itinerary => (
      <ItineraryCard key={itinerary._id} itinerary={itinerary} />
      ))}
    </main>
  )
}

export default Itineraries