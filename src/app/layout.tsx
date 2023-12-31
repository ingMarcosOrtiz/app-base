import * as React from 'react'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { Box } from '@mui/joy'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <Box component={'body'} sx={{ backgroundColor: '#ffebd2' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </Box>
    </html>
  )
}
