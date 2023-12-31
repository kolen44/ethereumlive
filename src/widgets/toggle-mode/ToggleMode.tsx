'use client'

import React, { useEffect } from "react";
import {IconButton, useColorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ToggleMode(){
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <IconButton icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode}/>
  )
}