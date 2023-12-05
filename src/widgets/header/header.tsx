import HeaderButton from '@/shared/buttons/header-button.tsx'

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
    <div class='header-div-menu-for-buttons'>
      {buttons}
    </div>
	)
}