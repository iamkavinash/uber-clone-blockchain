import { createContext, useState, useEffect } from 'react'



export const UberContext = createContext()


export const UberProvider = ({children}) => {
    const [pickup, setPickup] = useState('')
    const [dropoff, setDropoff] = useState('')
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()


const createLocationCoordinatePromise = (locationName,locationType) => {

    console.log('Trying to execute create Location Coordinate Promise')

    return new Promise(async (resolve,reject) => {
        const response = await fetch('api/map/getLocationCoordinates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: locationName,
                locationType: locationType
            })
        })

        const data = await response.json()
        console.log(data.data)

        if (data.message = 'success') {
            switch(locationType) {
                case 'pickup':
                    setPickupCoordinates(data.data)
                    break
                case 'dropoff':
                    setDropoffCoordinates(data.data)
                    break
            }

            console.log('Resolved')

            resolve()
        } else {
            console.log('Rejected')
            reject()
        }
    })
}

    useEffect(() => {

        console.log('Line 51 of UberContext');

        (async() => {
            await Promise.all([
                createLocationCoordinatePromise(pickup,'pickup'),
                createLocationCoordinatePromise(dropoff,'dropoff')
            ])
        })()

        
    },[pickup,dropoff])


    return (
        <UberContext.Provider value={{pickup,dropoff,pickupCoordinates, setDropoff, setPickup,dropoffCoordinates}}>{children}</UberContext.Provider>
    )
}