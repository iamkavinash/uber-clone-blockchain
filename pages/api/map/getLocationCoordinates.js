const MAPBOX_PLACES_API_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places"

// const project_Id = '9ktmfl6s'


const token = 'pk.eyJ1IjoiZWxnZW5lc2lzYmxvY2siLCJhIjoiY2w1djVpOWxpMDJidTNscnQ0bHhxaDk2bCJ9.jsa850TKoWTXxuPKBxaF9A'

// const token = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN

const getLocationCoordinates = async (req,res) => {

    console.log(req.body.location)

  const mapboxUrl = `${process.env.NEXT_PUBLIC_MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${token}`

//   `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  console.log('Inside getlocation coords',mapboxUrl)

    try {
        const response = await fetch(mapboxUrl)

        const data = await response.json()
        // console.log(data.features[0].center)
        res.status(200).send({
            message:"success",
            data: data.features[0].center
        })
    } catch (error) {
        res.status(500).send({
            message: 'error',
            data: error.message
        })
    }

   

}

export default getLocationCoordinates