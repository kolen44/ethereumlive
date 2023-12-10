'use client'
import Header from '@/widgets/header/header.tsx'
import MenuOpen from '@/widgets/pc-menu-left/menu.tsx'
import CreateTimeline from '@/widgets/roadmap-timeline/timeline.tsx'
import Cards from '@/widgets/main-information/cards.tsx'
import MainText from '@/widgets/main-information/main_text.tsx'
import {ChakraProvider } from '@chakra-ui/react'
import CreateCastle3D from '@/widgets/3d-model-castle/castle-3d.tsx'
import theme from './theme.tsx'
import Fonts from './fonts'
import '@/styles/main-page/main.scss'

export default function MainPage(){
	return(
    <ChakraProvider theme={theme}>
      <div class='main-page'>
        <MenuOpen />
        <main>
          <Header />
          <MainText />
          <Cards />
          <CreateCastle3D />
          <CreateTimeline />
        </main>
      </div>
    </ChakraProvider>
	)
}