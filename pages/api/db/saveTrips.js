// import { client } from '../../../sanity/sanity'


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


const saveTrips = async (req, res) => {
    console.log('save trips triggered')
    try {
      const tripDoc = {
        _type: 'trips',
        _id: `${req.body.userWalletAddress}-${Date.now()}`,
        pickup: req.body.pickupLocation,
        dropoff: req.body.dropoffLocation,
        rideTimestamp: new Date(Date.now()).toISOString(),
        price: parseFloat(req.body.price),
        rideCategory: req.body.selectedRide.service,
        passenger: {
          _key: `passenger-${req.body.userWalletAddress} - ${new Date(
            Date.now(),
          ).toISOString()}`,
          _ref: req.body.userWalletAddress,
          _type: 'reference',
        },
      }
      await client.createIfNotExists(tripDoc)
  
      res.status(200).send({ message: 'success' })
    } catch (error) {
      res.status(500).send({ message: 'error', data: error.message })
    }
  }
  
  export default saveTrips
  