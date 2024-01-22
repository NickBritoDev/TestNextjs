'use client'
import React from 'react'
import { Flex } from '@chakra-ui/react'
import ticket from '@/images/ticket.png'
import OptionClickHome from './components/OptionClickHome'
import ImagePage from './components/ImagePage'
import BoxTitle from './components/BoxTitle'

export default function Home () {
  return (
    <Flex
      h={'100vh'} w={'100%'}
      overflow={'hidden'} alignItems={'center'}
      gap={10} justifyContent={'flex-start'}
      flexDir={'column'}>

      <BoxTitle
        title={'Boas Vindas a Bilheteria Digital'}
        subTitle={'Selecione uma opção para iniciar a compra'} />

      <Flex flexDir={{ base: 'column', md: 'row' }} gap={4}>
        <OptionClickHome
          link={'/ticket'}
          img={'https://seeklogo.com/images/B/Bilhete_Unico-logo-A071D246F5-seeklogo.com.png'}
          text={'Carregar Bilhete'} />
        <OptionClickHome
          link={'/qrcode'}
          img={'https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw&r=0'}
          text={'Comprar QR Code'} />
      </Flex>

      <ImagePage bottom={-10} right={-16} width={500} img={ticket} />
    </Flex>
  )
}
