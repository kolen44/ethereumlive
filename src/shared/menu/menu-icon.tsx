import Image from 'next/image'

export default function MenuIcon(){
	return(
      <Image 
          src="/menu-icon.png"
          width={25}
          height={25}
          alt="Picture of the author"
        />
	)
}