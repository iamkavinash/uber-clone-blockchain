// import {client} from '../../../sanity/sanity.js'



import sanityClient from '@sanity/client'

const project_Id = '9ktmfl6s'
// const project_Id = process.env.SANITY_PROJECT_ID
const token = 'skKbKoJXIPPag0MX0VW1As3XnSX12tXEknhT4tuqKznBo9ldznTyAhlkl773tdyPqBNjXBh1jbB7XHbiZt6esjw0IRptM2ASsArBwSHBra5STAdxuy27IWYTM8Itiw3ZMHHCV5keTxVDoJCpphOuCpL9dfiGlcEmPVllpxjHSRu4yRKuafng'
// const token = process.env.SANITY_TOKEN
export const client = sanityClient({
    projectId: project_Id,
    dataset: 'production',
    apiVersion: 'v1',
    token: token,
    useCdn: false
})



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