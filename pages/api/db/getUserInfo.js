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


const getUserInfo = async (req, res) => {
  try {
    const query = `
      *[_type == "users" && walletAddress=="${req.query.walletAddress}"]{
          name,
          walletAddress,
          "imageUrl": profileImage.asset->url
        }
    `

    const sanityResponse = await client.fetch(query)

    res.status(200).send({ message: 'success', data: sanityResponse[0] })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getUserInfo