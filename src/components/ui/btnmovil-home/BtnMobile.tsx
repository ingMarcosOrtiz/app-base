'use client'
import React from 'react'
import { IconButton } from '@mui/joy'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { useUIStore } from '@/app/store'

export function BtnMobile() {
  const openMenuUIStore = useUIStore((state) => state.openSideMenu)
  return (
    <>
      <IconButton
        onClick={openMenuUIStore}
        variant='outlined'
        color='neutral'
        size='lg'>
        <MenuRoundedIcon />
      </IconButton>
    </>
  )
}
