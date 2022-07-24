import React from 'react'
import RideSelector from './RideSelector'
import {ethers} from 'ethers'
import { UberContext } from '../context/uberContext'

const style = {
    wrapper: `flex-1 h-full flex flex-col justify-between`,
    rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
    confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
    confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
  }
  
const shellAccount = "0x35fA6bA1a77f1D1e8Bf48144b75c0a8aF1c89A68"
  
export default function Confirm() {


  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
    basePrice
  } = React.useContext(UberContext)

console.log(price)


  const storeTripDetails = async (pickup, dropoff) => {
    try {
      await fetch('/api/db/saveTrips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide,
       
        }),
      })

      console.log(currentAccount)
      console.log(basePrice)

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: shellAccount,
            gas: '0x7EF40', // 520000 Gwei
            value: ethers.utils.parseEther(String(basePrice /10000000))._hex,
          },
        ],
      })
    } catch (error) {
      console.error(error)
    }

  
  }


  return (
    <div className={style.wrapper}>
    <div className={style.rideSelectorContainer}>
      {pickupCoordinates && dropoffCoordinates && <RideSelector />}
    
    </div>
    <div className={style.confirmButtonContainer}>
      <div className={style.confirmButtonContainer}>
        <div
          className={style.confirmButton}
          onClick={() => storeTripDetails(pickup, dropoff)}
         
        >
          Confirm {selectedRide.service || 'UberX'}
        </div>
      </div>
    </div>
  </div>
  )
}
