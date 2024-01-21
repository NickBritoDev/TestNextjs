import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

const BoxTitle = ({ title, subTitle }) => {
  return (
    <Box w={'100%'} px={{ base: 4, md: 10 }} my={10}>
      <Heading fontSize={{ base: '18px', md: 'initial' }}>{title}</Heading>
      <Text fontSize={{ base: '16px', md: 'initial' }}>{subTitle}</Text>
      <Box h={'5px'} w={'100%'} bg={'gray.200'} borderRadius={'50px'}></Box>
    </Box>
  )
}

BoxTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default BoxTitle
