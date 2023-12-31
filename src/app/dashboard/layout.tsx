import * as React from 'react'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
