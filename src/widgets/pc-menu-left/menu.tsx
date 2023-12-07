'use client'

import MenuIcon from '@/shared/menu/menu-icon'
import PCMenu from './menu-open.tsx'
import 'react'

export default function Menu(){
  function OpenMenu({Component, pageProps}){
    return (
      PCMenu
    )
  }
	return(
    <OpenMenu />
	)
}