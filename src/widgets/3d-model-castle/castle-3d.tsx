import React, { useEffect,  useRef } from "react";
import {Box} from '@chakra-ui/react'
import {create3DModel} from './render-castle.ts'

export default function CreateCastle3D(){
  const shouldRender: boolean = useRef(true)
  useEffect(()=>{
    if(shouldRender.current ){
      shouldRender.current = false
      if(window.innerWidth>1000){
        create3DModel()
      }
      
    }
  },[])
  return ( 
    <Box id='placeBox'  pos="absolute" >
      There will be something
    </Box>
   )
}