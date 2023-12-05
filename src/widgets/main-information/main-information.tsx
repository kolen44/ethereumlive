import Image from 'next/image'
import Link from 'next/link'
import './main_info.scss'

export default function MainInformation(){
	return(
    <div class='container'>
      <div class='box'>
        <h2 class='name'>Lotery</h2>
        <Link href="/" class='buy'>Buy now</Link>
      </div>
      <div class='box'>
        <h2 class='name'>Lotery</h2>
        <Link href="/" class='buy'>Buy now</Link>
      </div>
      <div class='box'>
        <h2 class='name'>Lotery</h2>
        <Link href="/" class='buy'>Buy now</Link>
      </div>
    </div>

	)
}