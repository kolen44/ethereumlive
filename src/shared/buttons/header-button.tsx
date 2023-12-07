import Link from 'next/link'
import {Text, Box, Heading} from '@chakra-ui/react'

export default function HeaderButton({props}){
	return(
      <Box>
        <Text as={Link}  textDecoration='none' href={props.href} className='header-button' fontSize={['2rem','2.5rem','2rem']}>{props.name}</Text>
      </Box>
	)
}