import * as React from 'react'

import { Tab, TabList, TabPanel, Tabs } from '@mui/joy'

import { LoginHome } from '@/components'

export default function LoginPage() {
  return (
    <>
      <Tabs sx={{ mt: '2rem' }} aria-label='Basic tabs' defaultValue={0}>
        <TabList
          disableUnderline
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'xl',
            p: 0.5,
            gap: 0.5,
            bgcolor: 'background.level1',
          }}>
          <Tab disableIndicator variant='outlined' color='warning'>
            Iniciar Sesión
          </Tab>
          <Tab disableIndicator variant='outlined' color='warning'>
            Registrarse
          </Tab>
        </TabList>
        <TabPanel sx={{ p: 0 }} value={0}>
          <LoginHome />
        </TabPanel>
        <TabPanel value={1}>Registrarse</TabPanel>
      </Tabs>
    </>
  )
}
