import React from 'react'
import logoImage from '../../images/logo-vemser.png'
import { Image } from './Logo.styles'

function Logo() {
  return (
    <Image src={logoImage} alt='Logo Vem Ser DBC' />
  )
}

export default Logo