const MAPBOX_PLACES_API_URL = "https://api.mapbox.com/directions/v5/mapbox/driving"

const project_Id = '9ktmfl6s'

const token = 'pk.eyJ1IjoiZWxnZW5lc2lzYmxvY2siLCJhIjoiY2w1djVpOWxpMDJidTNscnQ0bHhxaDk2bCJ9.jsa850TKoWTXxuPKBxaF9A'


// const mapboxUrl = `${process.env.MAPBOX_DIRECTIONS_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`



const getDuration = async (req, res) => {
    const mapboxUrl = `${MAPBOX_PLACES_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${token}`
    console.log(mapboxUrl)
  
    try {
      const response = await fetch(mapboxUrl)
      const data = await response.json()
      console.log('Line 18 in get duration',data.data)
  
      res.status(200).send({ message: 'success', data: data.routes[0].duration })
    } catch (error) {
      res.status(500).send({ message: 'error', data: error.message })
    }
  }

  
  export default getDuration