import Hero from './components/Hero'
import Services from './components/Services'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AudioPlayer from './components/AudioPlayer'
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material'


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0ff', // neon cyan
    },
    secondary: {
      main: '#f0f', // neon magenta
    },
    background: {
      default: '#0b0b14',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, monospace',
  },
})

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Navbar />
        <Hero />
        <AudioPlayer />
        <Services />
        <BookingForm />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
