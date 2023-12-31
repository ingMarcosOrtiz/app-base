import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from '@mui/joy'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

export function LoginHome() {
  return (
    <>
      <Box maxWidth={{ sx: '', md: '400px' }} m={{ sx: '0', md: '0 auto' }}>
        <Card
          color='warning'
          variant='plain'
          sx={{
            maxHeight: 'max-content',
            maxWidth: '100%',
            mx: 'auto',
            // to make the demo resizable
            overflow: 'auto',
            mt: '1.5rem',
          }}>
          <Typography
            justifyContent={'center'}
            level='title-lg'
            color='warning'
            startDecorator={<PersonOutlineOutlinedIcon />}>
            Iniciar Sesión
          </Typography>
          <Divider inset='none' />
          <CardContent
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
              gap: 1.5,
            }}>
            <FormControl sx={{ gridColumn: '1/-1' }} error>
              <FormLabel>Email</FormLabel>
              <Input size='sm' color='warning' variant='soft' />
              {/* <FormHelperText>Opps! something is wrong.</FormHelperText> */}
            </FormControl>
            <FormControl sx={{ gridColumn: '1/-1' }}>
              <FormLabel>Contraseña</FormLabel>
              <Input type='text' size='sm' color='warning' variant='soft' />
            </FormControl>

            <CardActions sx={{ gridColumn: '1/-1' }}>
              <Button
                // size='lg'
                sx={{
                  p: { xs: '8px 32px', md: '6px 16px' },
                  fontSize: { xs: '17px', md: '14px' },
                }}
                variant='solid'
                color='warning'>
                Iniciar Sesión
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
