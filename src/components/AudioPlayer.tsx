import { useRef, useState } from 'react'
import { Box, Typography, Button, Paper } from '@mui/material'
import { motion } from 'framer-motion'


export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Retro Cassette Deck
        </Typography>

        <Paper
          elevation={6}
          sx={{
            width: 300,
            mx: 'auto',
            p: 3,
            borderRadius: 2,
            backgroundColor: '#222',
            border: '2px solid #0ff',
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#0ff',
              top: '50%',
              transform: 'translateY(-50%)',
            },
            '&::before': {
              left: 30,
            },
            '&::after': {
              right: 30,
            },
          }}
        >
          <Box
            sx={{
              height: 8,
              backgroundColor: '#f0f',
              width: '80%',
              mx: 'auto',
              mb: 2,
              borderRadius: 1,
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="contained" color="primary" onClick={togglePlay}>
              {playing ? 'Pause' : 'Play'}
            </Button>
            <audio ref={audioRef} src="/demo-mix.mp3" preload="auto" />
          </Box>
        </Paper>
      </Box>
    </motion.div>
  )
}
