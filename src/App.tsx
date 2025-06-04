import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';

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
});

// Fix: Wrap all components in React.Suspense for Vercel edge compatibility
export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Hero />
          <AudioPlayer />
          <Services />
          <BookingForm />
          <Footer />
        </React.Suspense>
      </Container>
    </ThemeProvider>
  );
}
