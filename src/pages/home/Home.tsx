import React from 'react'
import Header from '../../components/ui/header/Header'
import product from '../../assets/img/mouse.png'
import Style from './Home.module.scss'
import Button from '../../components/ui/button/Button'
import Icon from '../../components/ui/icon/Icon'

export default function Home() {
  return (
    <>
      <Header />
      <div className={Style.content}>
        <div className={Style.text}>
          <div>
          <p>Get to know the best products on the best gamer components page</p>
          </div>
          <Button name='Products' router='products'/>
          <div className={Style.icons}>
            <Icon name='facebook'/>
            <Icon name='twitter'/>
            <Icon name='instagram'/>
          </div>
        </div>
        <div className={Style.img}>
          <img src={product} alt="" />
        </div>
      </div>
    </>
  )
}