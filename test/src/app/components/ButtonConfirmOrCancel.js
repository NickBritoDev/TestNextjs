import { Button, Flex, Spinner, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import PropTypes from 'prop-types'

const ButtonConfirmOrCancel = ({ visibility }) => {
  const [isLoadingCancel, setIsLoadingCancel] = useState(false)
  const [isLoadingConfirm, setIsLoadingConfirm] = useState(false)

  return (
    <Flex
      display={visibility ? 'flex' : 'none'}
      gap={2}
      right={2}
      bottom={2}
      pos={'fixed'}
    >
      <Button
        colorScheme={'red'}
        onClick={() => {
          setIsLoadingCancel(true)
          location.reload()
        }}
        textTransform={'uppercase'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
      >
        <Text>Cancelar</Text>
        {isLoadingCancel && <Spinner />}
      </Button>
      <Link href={'/payment'}>
        <Button
          colorScheme={'whatsapp'}
          onClick={() => {
            setIsLoadingConfirm(true)
          }}
          textTransform={'uppercase'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={1}
        >
          <Text mb={-1}>Confirmar</Text>
          {isLoadingConfirm
            ? (
              <Spinner />
              )
            : (
              <MdKeyboardDoubleArrowRight fontSize={28} />
              )}
        </Button>
      </Link>
    </Flex>
  )
}

ButtonConfirmOrCancel.propTypes = {
  visibility: PropTypes.bool.isRequired
}

export default ButtonConfirmOrCancel
