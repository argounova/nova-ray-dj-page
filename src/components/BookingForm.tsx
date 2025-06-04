import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material'
import { motion } from 'framer-motion'


export default function BookingForm() {
  const [eventType, setEventType] = useState('');

  const handleEventChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEventType(event.target.value as string);
  };

  return (
    <motion.div
      id="booking"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <Box sx={{ py: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Book Nova Ray
        </Typography>
        <Box
          component="form"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField label="Name" fullWidth />
          <TextField label="Email" type="email" fullWidth />
          <FormControl fullWidth>
            <InputLabel id="event-type-label">Event Type</InputLabel>
            <Select
              labelId="event-type-label"
              value={eventType}
              label="Event Type"
              onChange={handleEventChange}
            >
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Birthday Bash">Birthday Bash</MenuItem>
              <MenuItem value="Dance Night">Dance Night</MenuItem>
              <MenuItem value="Pride Event">Pride Event</MenuItem>
              <MenuItem value="Corporate Party">Corporate Party</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Event Date" type="date" InputLabelProps={{ shrink: true }} fullWidth />
          <TextField label="Message" multiline rows={4} placeholder="Tell us about your event..." fullWidth />
          <Button variant="contained" color="secondary" disabled>
            Submit (Static Only)
          </Button>
        </Box>
      </Box>
    </motion.div>
  )
}
