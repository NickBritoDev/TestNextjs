'use client'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BoxTitle from '../components/BoxTitle'
import ButtonReturn from '../components/ButtonReturn'
import ImagePage from '../components/ImagePage'
import selectCount from '@/images/selectCount.png'
import ButtonConfirmOrCancel from '../components/ButtonConfirmOrCancel'

export default function Page () {
  const [visibility, setVisibility] = useState(false)
  const [optionSelected, setOptionSelected] = useState('')

  const visibilityText = (text) => {
    setVisibility(true)
    setOptionSelected(text)
  }

  return (
    <Box w={'100%'} h={'100vh'}>
      <BoxTitle
        title={'Opção Selecionada: QR Code'}
        subTitle={"Selecione a quantidade de QR Code's que deseja comprar"} />

      <Flex alignItems={'center'} justifyContent={'center'} gap={2} flexDir={'column'}>
        <Button display={visibility ? 'none' : 'flex'} onClick={() => { visibilityText('Opção selecionada: 1 unidade') }} colorScheme={'telegram'} w={250}>
          <Text fontSize={22}>1 Unidade: R$ 5,00</Text>
        </Button>
        <Button display={visibility ? 'none' : 'flex'} onClick={() => { visibilityText('Opção selecionada: 2 unidades') }} colorScheme={'telegram'} w={250}>
          <Text fontSize={22}>2 Unidades: R$ 10,00</Text>
        </Button>
        <Button display={visibility ? 'flex' : 'none'} disabled cursor={'not-allowed'}>
          <Text fontWeight={'bold'}>{optionSelected}</Text>
        </Button>
      </Flex>

      <ImagePage bottom={20} width={400} height={300} right={''} left={-16} img={selectCount} />

      <ButtonReturn />
      <ButtonConfirmOrCancel linkCancel={'/qrcode'} visibility={visibility} />
    </Box>
  )
}
