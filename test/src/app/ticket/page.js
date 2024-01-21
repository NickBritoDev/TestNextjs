'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'
import BoxTitle from '../components/BoxTitle'
import ButtonReturn from '../components/ButtonReturn'

export default function Page () {
  return (
      <Box w={'100%'} h={'100vh'}>
        <BoxTitle
        title={'Opção Selecionada: Bilhete'}
        subTitle={'Selecione uma opção para comprar os créditos'}/>
        <ButtonReturn/>
      </Box>
  )
}
