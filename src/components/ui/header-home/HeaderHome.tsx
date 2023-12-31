import React from 'react'
import Link from 'next/link'
import { BtnMobile, MenuHome } from '@/components'
import { Box, Sheet, Stack, Typography } from '@mui/joy'
import Image from 'next/image'
import images from '@/app/assets/images'

export function HeaderHome() {
  return (
    <>
      <Sheet
        // variant='soft'
        sx={{
          height: 'var(--Header-height)',
          // background: 'pink',
          borderRadius: 'lg',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          m: { xs: '', md: '4px' },
          p: { xs: 2, md: 1 },
          position: 'sticky',
          top: 0,
          zIndex: 1,
          gap: 1,
          borderBottom: { xs: '1px solid', md: '0' },
          borderColor: { xs: 'background.level1', md: '' },
          boxShadow: { xs: 'sm', md: 'initial' },
        }}>
        <Link href='/' style={{ textDecoration: 'none' }}>
          <Stack
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'10px'}>
            <Image
              loading='lazy'
              width={35}
              src={images.iconLogoValparaiso}
              alt='logo-Valparaiso'
            />
            <Typography
              fontSize={'1rem'}
              level='title-lg'
              color='neutral'
              component='span'>
              Conjunto Valparaiso
            </Typography>
          </Stack>
        </Link>

        <Box
          sx={{
            display: { xs: 'none', md: 'inline-flex' },
          }}>
          <MenuHome isMobile={false} orientation='horizontal' />
        </Box>
        <Box
          sx={{
            display: { xs: 'inline-flex', md: 'none' },
          }}>
          <BtnMobile />
        </Box>
      </Sheet>
    </>
  )
}
