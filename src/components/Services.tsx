import { Box, Grid, Typography, Card, CardContent } from '@mui/material'
import { motion } from 'framer-motion'


const services = [
  'Weddings',
  'Birthday Bashes',
  'Themed Dance Nights',
  'Pride Events',
  'Corporate Flashback Parties',
]

export default function Services() {
  return (
    <Box id="services" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Event Services
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: '#6b21a8',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 0 12px #0ff',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">{service}</Typography>
                  <Typography variant="body2">
                    Retro setlists, custom vibes, unforgettable memories.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
