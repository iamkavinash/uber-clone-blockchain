import {client} from '../../../sanity/sanity.js'

const query = `*[_type == "rides"] {
    "service": title,
    "iconURl": icon.asset->url,
  
    priceMultiplier,
    orderById
  } | order(orderById asc)`


const getRideTypes = async (req,res) => {

    try {

       const sanityResponse =  await client.fetch(query)
    //    console.log(sanityResponse)
       res.status(200).send({
        message: 'success',
        data: sanityResponse
    })
        
    } catch (error) {

        res.status(500).send({
            message: 'error',
            data: error.message
        })
        
    } 
}

export default getRideTypes