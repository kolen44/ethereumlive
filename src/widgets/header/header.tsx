import HeaderButton from '@/shared/buttons/header-button.tsx'
import ToggleMode from '@/widgets/toggle-mode/ToggleMode'
import {Box} from '@chakra-ui/react'

let airdrop = [
  {
      href : '/airdrop',
      name : 'AIRDROP'
  },
  {
      href : '/airdrop',
      name : 'HOME'
  },
  {
      href : '/airdrop',
      name : 'ABOUT'
  },
]

export default function Header(){
  const buttons = airdrop.map(item=>{
        return (
          <HeaderButton props={item}  />
        )
      })
	return(
    <Box justifyContent='space-between' className='header-div-menu-for-buttons'>
      <Box display='flex'>
        {buttons}
      </Box>
      <ToggleMode />
    </Box>
	)
}