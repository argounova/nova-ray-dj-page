import { useRef, useState, useEffect } from 'react'
import { Box, Typography, Paper, IconButton } from '@mui/material'
import { PlayArrow, Pause } from '@mui/icons-material'
import { motion, useAnimation } from 'framer-motion'


export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const reelControls = useAnimation();
  const glowControls = useAnimation();

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      reelControls.stop();
      glowControls.stop();
    } else {
      audioRef.current.play();
      reelControls.start({ rotate: 360, transition: { repeat: Infinity, ease: 'linear', duration: 2 } });
      glowControls.start({
        boxShadow: ['0 0 8px #f0f', '0 0 24px #0ff', '0 0 8px #f0f'],
        transition: {
          repeat: Infinity,
          duration: 1.2,
          ease: 'easeInOut',
        },
      });
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (!playing) {
      reelControls.set({ rotate: 0 });
      glowControls.set({ boxShadow: 'none' });
    }
  }, [playing, reelControls, glowControls]);

  return (
    <Box sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Preview my Retro Sound!
      </Typography>

      <motion.div 
        animate={glowControls}
        style={{
          width: 320,
          margin: '0 auto',
        }}
        >
        <Paper
          elevation={6}
          sx={{
            p: 3,
            borderRadius: 2,
            backgroundColor: '#222',
            border: '2px solid #0ff',
            position: 'relative',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          {/* Cassette Reels */}
          <motion.div
            animate={reelControls}
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#0ff',
              top: '50%',
              left: 30,
              transform: 'translateY(-50%)',
              transformOrigin: 'center center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              {/* Inner hub */}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: '#111',
                  position: 'relative',
                }}
              >
              {/* Faux screws (4 dots in a cross pattern) */}
              {['top', 'right', 'bottom', 'left'].map((pos, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    backgroundColor: '#0ff',
                    position: 'absolute',
                    ...(pos === 'top' && { top: 0, left: '50%', transform: 'translateX(-50%)' }),
                    ...(pos === 'right' && { right: 0, top: '50%', transform: 'translateY(-50%)' }),
                    ...(pos === 'bottom' && { bottom: 0, left: '50%', transform: 'translateX(-50%)' }),
                    ...(pos === 'left' && { left: 0, top: '50%', transform: 'translateY(-50%)' }),
                  }}
                />
              ))}
            </Box>
          </motion.div>
          <motion.div
            animate={reelControls}
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#0ff',
              top: '50%',
              right: 30,
              transform: 'translateY(-50%)',
              transformOrigin: 'center center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              {/* Inner hub */}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: '#111',
                  position: 'relative',
                }}
              >
              {/* Faux screws (4 dots in a cross pattern) */}
              {['top', 'right', 'bottom', 'left'].map((pos, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    backgroundColor: '#0ff',
                    position: 'absolute',
                    ...(pos === 'top' && { top: 0, left: '50%', transform: 'translateX(-50%)' }),
                    ...(pos === 'right' && { right: 0, top: '50%', transform: 'translateY(-50%)' }),
                    ...(pos === 'bottom' && { bottom: 0, left: '50%', transform: 'translateX(-50%)' }),
                    ...(pos === 'left' && { left: 0, top: '50%', transform: 'translateY(-50%)' }),
                  }}
                />
              ))}
            </Box>
          </motion.div>


          {/* Tape Strip */}
          <Box
            sx={{
              height: 8,
              backgroundColor: '#f0f',
              width: '80%',
              mx: 'auto',
              mb: 3,
              borderRadius: 1,
            }}
          />

          {/* Cassette Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              onClick={togglePlay}
              sx={{
                backgroundColor: '#111',
                color: '#0ff',
                border: '2px solid #0ff',
                '&:hover': {
                  backgroundColor: '#0ff',
                  color: '#000',
                },
              }}
            >
              {playing ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
            </IconButton>
            <audio ref={audioRef} src="/demo-mix.mp3" preload="auto" />
          </Box>
        </Paper>
      </motion.div>
    </Box>
  )
}
