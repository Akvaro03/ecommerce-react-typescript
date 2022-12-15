import React from 'react'
import Style from './Button.module.scss'
type prop = {
    name:string
}
const Button = ({name}:prop) => {
  return (
    <div>
        <span className={Style.producButton}>{name}</span>
    </div>
)
}

export default Button