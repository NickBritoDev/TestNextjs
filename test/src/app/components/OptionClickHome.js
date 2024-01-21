/* eslint-disable react/prop-types */
'use client'
import { Box, Button, Image, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function OptionClickHome ({ text, img, link }) {
  const [isLoading, setIsLoading] = useState(false)

  return (
        <Box bg={'white'} zIndex={999} onClick={() => { setIsLoading(true) }} padding={4} boxShadow={'xl'} rounded={'xl'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
            <Link href={link}>
                <Image ml={2} w={'150px'} src={img} />
                <Button mt={4} cursor={isLoading ? 'not-allowed' : 'pointer'} pointerEvents={isLoading && 'none'} >
                   {text} {isLoading && <Spinner />}
                </Button>
            </Link>
        </Box>
  )
}
