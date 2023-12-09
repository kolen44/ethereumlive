import React, { useEffect } from "react";
import {Box} from '@chakra-ui/react'
import {create3DModel} from './render.ts'

export default function RoadmapTimeLine(){
  useEffect(() => {
    create3DModel()
  }, []);
  return ( 
    <Box id='placeBox' maxW={['500px','700px','960px']} >
      There will be something
    </Box>
   )
}