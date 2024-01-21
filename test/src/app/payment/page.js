import { Box } from '@chakra-ui/react'
import React from 'react'
import BoxTitle from '../components/BoxTitle'
import selectCount from '@/images/payment.png'
import ImageRigthPage from '../components/ImagePage'
import ButtonReturn from '../components/ButtonReturn'

export default function page () {
  return (
    <Box w={'100%'} h={'100vh'}>
      <BoxTitle
        title={'Confirmação de Pagamento'}
        subTitle={'Leia o QR Code (PIX) ou insira o cartão para efetuar o pagamento'} />

      <ImageRigthPage bottom={4} width={400} height={300} right={-16} img={selectCount} />

      <ButtonReturn />
    </Box>
  )
}
