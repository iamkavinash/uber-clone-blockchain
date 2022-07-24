import React from 'react'
import Image from 'next/image'
import UberBlack from '../assets/uberBlack.png'
import UberBlackSUV from '../assets/uberBlackSuv.png'
import UberX from '../assets/uberX.png'
import UberXL from '../assets/uberXL.png'
import MATIC from '../assets/matic.png'
import { UberContext } from '../context/uberContext'


const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
  matic: `ml-3`
} 


// const carList = [
//   {name: 'Uber X', icon: UberX, priceMultiplier: 1},
//   {name: 'Uber Black', icon: UberBlack, priceMultiplier: 1.6},
//   {name: 'Uber Black Suv', icon: UberBlackSUV, priceMultiplier: 1.7},
//   {name: 'Uber XL', icon: UberXL, priceMultiplier: 1.8}, 
// ]

// const basePrice = 2358
export default function RideSelector() {



  const { selectedRide, setSelectedRide, setBasePrice, setPrice, basePrice } =
    React.useContext(UberContext)


    console.log(basePrice)

  const [carList, setCarList] = React.useState([])



  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/db/getRideTypes`)

        const data = await response.json()
        console.log(data.data)
        setCarList(data.data)
        // console.log(data.data)
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])



  return (
    <div className={style.wrapper}>

      <div className={style.title}>
        Choose a Ride, or Swipe for more 
      </div>

      <div className={style.carList}>

      {carList.map((car,i) => (
        <div
            key={i}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice/ 1000 **2) * car.priceMultiplier).toFixed(5))
            }}
          >

          <Image

          src={car.iconURl}
          className={style.carImage}
          height={50}
          width={50}
          
          
           />

           <div className={style.carDetails}>
           <div className={style.service}>{car.service} </div> 
           <div className={style.time}> 5 mins away </div>

           <div className={style.priceContainer}>  
              <div className={style.price}>

              {((basePrice/ 1000 **2) * car.priceMultiplier).toFixed(4)}
              
               </div>
<div className={style.matic} > <Image  src={MATIC} height={25} width={40} /> </div>
              
           </div>
          </div>
          </div>

      ))}


      </div>


    </div>
  )
}
