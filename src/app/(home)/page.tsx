import { Box } from '@mui/joy'
import Image from 'next/image'
import * as React from 'react'
import images from '@/app/assets/images'

export default function HomePage() {
  return (
    <Box p={'.75rem'}>
      contenido del home principal - <b>Actualmente en Desarrollo</b>
      <br />
      <Image
        loading='lazy'
        width={500}
        height={300}
        src={images.imgValparaiso}
        alt='logo-Valparaiso'
      />
    </Box>
  )
}
