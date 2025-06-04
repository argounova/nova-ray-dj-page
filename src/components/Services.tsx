import Grid from '@mui/material/Grid'
import { Box, Typography, Card, CardContent } from '@mui/material'


const services = [
  'Weddings',
  'Birthday Bashes',
  'Themed Dance Nights',
  'Pride Events',
  'Corporate Flashback Parties',
];

export default function Services() {
  return (
    <Box id="services" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Event Services
      </Typography>

      {/* Container Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#6b21a8',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 0 12px #0ff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                <Typography variant="h6">{service}</Typography>
                <Typography variant="body2">
                  Retro setlists, custom vibes, unforgettable memories.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}