import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types'

const ImageRigthPage = ({ img, right, left, width, height, bottom }) => {
  return (
    <Box pos={'absolute'} bottom={bottom} right={right} left={left} zIndex={-1}>
      <Image
        src={img}
        alt="Descrição da imagem"
        width={width}
        height={height}
      />
    </Box>
  )
}

ImageRigthPage.propTypes = {
  img: PropTypes.string.isRequired,
  right: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired

}

export default ImageRigthPage
