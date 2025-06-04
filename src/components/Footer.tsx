import { Box, Typography, Link, Stack } from '@mui/material'


export default function Footer() {
  return (
    <Box id="contact" sx={{ py: 6, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} DJ Nova Ray. All Rights Reserved.
      </Typography>
      <Stack direction="row" spacing={3} justifyContent="center" mt={2}>
        <Link href="#" underline="hover" color="primary">Instagram</Link>
        <Link href="#" underline="hover" color="primary">YouTube</Link>
        <Link href="#" underline="hover" color="primary">TikTok</Link>
      </Stack>
    </Box>
  )
}
