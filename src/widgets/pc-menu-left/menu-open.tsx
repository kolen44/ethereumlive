import Link from 'next/link'
import Image from 'next/image'

export default function PCMenu({}){
  return (
    <div class='pc-menu'>
      <div class='main-pc-menu-left-button'>
        <Image 
          src="/home.png"
          width={16}
          height={16}
          alt="Picture of the author"
          class='icon-menu'
        />
        <Link href='/' class='pc-left-menu-button' >Home</Link>
      </div>
      <div class='main-pc-menu-left-button'>
        <Image 
          src="/about.png"
          width={16}
          height={16}
          alt="Picture of the author"
          class='icon-menu'
        />
        <Link href='/' class='pc-left-menu-button' >About us</Link>
      </div>
      <div class='main-pc-menu-left-button'>
        <Image 
          src="/roadmap.png"
          width={16}
          height={16}
          alt="Picture of the author"
          class='icon-menu'
        />
        <Link href='/' class='pc-left-menu-button' >Roadmap</Link>
      </div>
    </div>
	)
}