import { ContainerHome, HeaderHome, Sidebar } from '@/components'
import * as React from 'react'

export const metadata = {
  title: 'App Valparaiso',
  description: 'Home ',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContainerHome>
      <HeaderHome />
      <Sidebar />
      {children}
    </ContainerHome>
  )
}
