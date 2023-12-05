import Link from 'next/link'

export default function HeaderButton({props}){
	return(
      <div class=''>
        <Link href={props.href} class='header-button' >{props.name}</Link>
      </div>
	)
}