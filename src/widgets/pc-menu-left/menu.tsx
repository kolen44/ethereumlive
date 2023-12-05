import MenuIcon from '@/shared/menu/menu-icon'
import PCMenu from './menu-open.tsx'

export default function Menu(){
  function OpenMenu(){
    return (
      PCMenu
    )
  }
	return(
    <div class='menu-icon'>
      <MenuIcon onClick = {OpenMenu()}/>
    </div>
	)
}