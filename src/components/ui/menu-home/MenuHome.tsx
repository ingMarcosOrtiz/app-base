'use client'
import {
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  SvgIcon,
  Typography,
} from '@mui/joy'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuItem } from '@/interfaces/menuItems'
import menuItems from './menu'

interface Props {
  // icon?: React.ReactElement<typeof SvgIcon> | null
  isMobile: boolean
  orientation: 'horizontal' | 'vertical' | undefined
}

export function MenuHome({ isMobile, orientation }: Props) {
  const pathName = usePathname()

  return (
    <>
      <List orientation={orientation} component={'ul'}>
        {menuItems.map(({ icon, path, title, notification }: MenuItem) => (
          <ListItem key={title} sx={{ p: isMobile ? undefined : '0 8px' }}>
            <Link href={path} style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemButton
                selected={pathName === path ? true : false}
                color='warning'
                sx={{ borderRadius: '12px', my: '.0625rem' }}>
                {icon}
                <ListItemContent>
                  <Typography level={isMobile ? 'title-md' : 'body-sm'}>
                    {title}
                  </Typography>
                </ListItemContent>
                {notification && (
                  <Chip size='sm' color='danger' variant='solid'>
                    {notification}
                  </Chip>
                )}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}
