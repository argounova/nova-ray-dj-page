import { Box, Typography, Button, Avatar, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import AvatarImage from '../assets/nova-ray-avatar.png'


export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: 'linear-gradient(to bottom, #8b5cf6, #6b21a8, #0b0b14)',
          color: 'white',
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Avatar
            src={AvatarImage}
            alt="DJ Nova Ray"
            sx={{
              width: 240,
              height: 240,
              boxShadow: '0 0 12px #0ff, 0 0 24px #f0f',
            }}
          />
          <Typography variant="h2" fontWeight="bold">
            DJ Nova Ray
          </Typography>
          <Typography variant="body1" maxWidth={600}>
            Spinning synth-soaked 80s and 90s hits for weddings, parties, and throwback nights you’ll never forget.
          </Typography>
          <Button variant="contained" color="secondary">
            Book Now
          </Button>
        </Stack>
      </Box>
    </motion.div>
  )
}
