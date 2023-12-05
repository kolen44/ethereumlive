'use client'
import Header from '@/widgets/header/header.tsx'
import MenuOpen from '@/widgets/pc-menu-left/menu.tsx'
import MainInformation from '@/widgets/main-information/main-information.tsx'
import MainText from '@/widgets/main-information/main_text.tsx'
import ThemeProvider from 'chakra-ui/core'
import '@/styles/header/header.scss'

export default function MainPage(){
	return(
    <ThemeProvider>
      <div class='header'>
        <Menu />
        <main>
          <Header />
          <MainText />
          <MainInformation />
        </main>
        
      </div>
    </ThemeProvider>
	)
}