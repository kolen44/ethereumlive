import './main_info.scss'
import {Text, Box, Heading} from '@chakra-ui/react'

export default function MainText(){
  return(
    <Box
      className='main-text'
    >
      <Heading color='#e7c697' fontSize={['2.5rem','3rem','3rem']}>Investment is our future...</Heading>
      <Heading color='#deaf6d' fontSize={['2rem','2rem','2.5rem']} display='flex' justifyContent='end'>Bernard Arno</Heading>
    </Box>
  )
}