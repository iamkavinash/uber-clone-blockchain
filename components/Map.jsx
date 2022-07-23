import React from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'


const style = {
    wrapper: `flex-1 h-full w-full`
}
export default function Map() {

const access_token = 'pk.eyJ1IjoiZWxnZW5lc2lzYmxvY2siLCJhIjoiY2w1djVpOWxpMDJidTNscnQ0bHhxaDk2bCJ9.jsa850TKoWTXxuPKBxaF9A'

mapboxgl.accessToken = access_token


const {pickupCoordinates, dropoffCoordinates} = React.useContext(UberContext)

React.useEffect(() => {

    var map = new mapboxgl.Map(
        {

            container: 'map',
            style: "mapbox://styles/mapbox/dark-v10",
            
            center: [-99.29, 39],
            zoom: 3,

        }
    )


    
    if (pickupCoordinates) {
      addToMap(map,pickupCoordinates)
    }
    
    if (dropoffCoordinates) {
      addToMap(map,dropoffCoordinates)
    }
    
    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates,pickupCoordinates], {
        padding: 60
      })
    }


}, []

)
const addToMap = (map,coordinates) => {

  const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  // console.log(marker1)
}


  return (
    <div id="map" className={style.wrapper}>Map</div>
  )
}
 