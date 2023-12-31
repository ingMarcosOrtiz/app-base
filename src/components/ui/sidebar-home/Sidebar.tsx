'use client'
import React from 'react'
import { Box, DialogTitle, Divider, Drawer, Stack } from '@mui/joy'
import ImageIcon from '@mui/icons-material/Image'

import { useUIStore } from '@/app/store'
import Link from 'next/link'
import { MenuHome } from '@/components'
import images from '@/app/assets/images'
import Image from 'next/image'

export function Sidebar() {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen)
  const onCloseMenu = useUIStore((state) => state.closeSideMenu)
  return (
    <>
      <Drawer size={'sm'} open={isSideMenuOpen} onClose={() => onCloseMenu()}>
        <Box role='presentation' sx={{ p: 2 }}>
          <Stack
            p={'1rem'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Link href={'/'}>
              <Image
                loading='lazy'
                width={90}
                src={images.iconLogoValparaiso}
                alt='logo-Valparaiso'
              />
            </Link>
            <DialogTitle level='body-md' color='neutral'>
              Conjunto Valparaiso.
            </DialogTitle>
          </Stack>
          <Divider />

          <MenuHome isMobile={true} orientation='vertical' />
        </Box>
      </Drawer>
    </>
  )
}
