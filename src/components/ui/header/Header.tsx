import React from 'react'
import styles from "./Header.module.scss"
import accountImag from "../../../assets/img/accountImg.png"
import { useCart } from '../../../context/useCartContext'

import { cart } from '../../../types/types'
const Header = () => {
  let {name, products}:cart = useCart()
  console.log(name)
  console.log(products)


  return (
    <div className={styles.headerMain}>
      <div className={styles.logo}>
        <span>GG</span>
      </div>
      <div className={styles.tabs}>
        <div className={styles.tab}>Products</div>
        <div className={styles.tab}>Mouses</div>
        <div className={styles.tab}>Keyboards</div>
        <div className={styles.tab}>Headsets</div>
      </div>
      <div className="space"></div>
      <div className={styles.accountAndCart}>
        <div className={styles.account}>
          <div className={styles.accountImage}>
            <img src={accountImag} alt="" className={styles.img}/>
          </div>
          <div className="accountName"><span>Nombre</span></div>
        </div>
        <div className="cart">
          <div className={styles.NumberCart}>
            <span className={styles.number}>{products}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header