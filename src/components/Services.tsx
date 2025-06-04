import { Box, Typography, Card, CardContent } from '@mui/material'


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
      <Typography variant="h4" align="center" gutterBottom>
        Event Services
      </Typography>

      {/* 
        Instead of MUI’s <Grid>, use a CSS grid via Box.
        - On xs: one column
        - On sm: two columns
        - On md+: three columns
      */}
      <Box
        sx={{
          display: 'grid',
          gap: 4,
          justifyItems: 'center',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
          },
          px: 2,
        }}
      >
        {services.map((service, idx) => (
          <Card
            key={idx}
            sx={{
              width: '100%',
              maxWidth: 300,
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
        ))}
      </Box>
    </Box>
  );
}
