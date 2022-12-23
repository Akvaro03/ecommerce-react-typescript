import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Button.module.scss'
type prop = {
    name:string,
    router:string
}
const Button = ({name,router}:prop) => {
  return (
    <div>
        <Link className={Style.producButton} to={router}>{name}</Link>
    </div>
)
}

export default Button