import React, { useState } from 'react'
import { Button, Spinner, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'

export default function ButtonReturn () {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Link href={'/'}>
      <Button
        onClick={() => { setIsLoading(true) }}
        left={2}
        bottom={2}
        pos={'fixed'}
        textTransform={'uppercase'}
        display={'flex'} alignItems={'center'}
        justifyContent={'center'} gap={2}>
        {isLoading
          ? (
          <Spinner />
            )
          : (
          <MdKeyboardDoubleArrowLeft fontSize={28} />
            )}
        <Text>voltar</Text>
      </Button>
    </Link>
  )
}
