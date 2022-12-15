import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


type props = {
    name:string
}


const Icon = ({name}:{name:string}) => {
    if (name === 'facebook') {
        return <FaFacebookF />
    }else if (name === 'twitter'){
        return <FaTwitter />
    } else if(name === 'instagram'){
        return <FaInstagram />  
    } else return <></>
}

export default Icon