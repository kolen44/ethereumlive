'use client'
import Header from '@/widgets/header/header.tsx'
import MenuOpen from '@/widgets/pc-menu-left/menu.tsx'
import CreateTimeline from '@/widgets/roadmap-timeline/timeline.tsx'
import Cards from '@/widgets/main-information/cards.tsx'
import MainText from '@/widgets/main-information/main_text.tsx'
import {ChakraProvider } from '@chakra-ui/react'
import RoadmapTimeLine from '@/widgets/roadmap/roadmap.tsx'
import theme from './theme.tsx'
import Fonts from './fonts'
import '@/styles/header/header.scss'

export default function MainPage(){
	return(
    <ChakraProvider theme={theme}>
      <div class='header'>
        <MenuOpen />
        <main>
          <Header />
          <MainText />
          <Cards />
          <RoadmapTimeLine />
          <CreateTimeline />
        </main>
      </div>
    </ChakraProvider>
	)
}