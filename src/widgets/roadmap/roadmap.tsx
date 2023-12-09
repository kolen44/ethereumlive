import React, { useEffect,  useRef } from "react";
import {Box} from '@chakra-ui/react'
import {create3DModel} from './render.ts'

export default function RoadmapTimeLine(){
  const shouldRender: boolean = useRef(true)
  useEffect(()=>{
    if(shouldRender.current ){
      shouldRender.current = false
      create3DModel()
    }
  },[])
  return ( 
    <Box id='placeBox' maxW={['500px','700px','960px']} >
      There will be something
    </Box>
   )
}