import { defaultHead } from 'next/head'
import React from 'react'
import Image from 'next/image'
import avatar from '../images/e.jpeg'
import {BsPerson} from 'react-icons/bs'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'


const style = {
    wrappper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,

    rightMenu: `flex gap-3 items-center`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
    loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
    loginText: `m1-2`

}






// const currentAcc =  ''
export const Navbar = () => {


const {currentAccount,currentUser, connectWallet} = React.useContext(UberContext)
console.log(currentUser)

  return (
    <div className={style.wrappper}>

        <div className={style.leftMenu}>

            <div className={style.logo}> EL_UBER </div>
            <div  className={style.menuItem}>RIDE </div>
            <div  className={style.menuItem}>Drive</div>
            <div  className={style.menuItem }>More</div>
        </div>

        <div className={style.rightMenu}>

        <div  className={style.menuItem}>Help</div>
        <div  className={style.menuItem}>{currentUser.name?.split(' ')[0]} </div>
        
        <div  className={style.userImageContainer}>
        <Image className={style.userImage} src={avatar} width={40} height={40}  /> 
        
        </div>

             {
              currentAccount ? ( <div>{currentAccount.slice(0,12)}...</div>):( <div  onClick={() => connectWallet()} className={style.loginButton}>
                <BsPerson />
               <span> Login</span> 
                
                </div>)
            }
 



        </div>
        
    </div>
  )
}

export default Navbar