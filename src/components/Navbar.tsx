import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'


export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={4}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Nova Ray
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#booking">Book</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
