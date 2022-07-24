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

const createUserInSanity = async (req, res) => {
  try {
    const userDoc = {
      _type: 'users',
      _id: req.body.userWalletAddress,
      name: req.body.name,
      walletAddress: req.body.userWalletAddress,
    }

    await client.createIfNotExists(userDoc)

    res.status(200).send({ message: 'success' })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default createUserInSanity