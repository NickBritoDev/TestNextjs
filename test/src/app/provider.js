/* eslint-disable react/prop-types */
'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers ({ children }) {
  return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
  )
}
