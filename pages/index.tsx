import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import AppBar from '../src/components/AppBar'
import Footer from '../src/components/Footer'
import BookCard from '../src/components/BookCard'



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function Album() {
  return (
    <>
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Just Read It!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Reading is important, because if you can read, you can learn anything about everything and everything about anything
            </Typography>

            <TextField
              id="outlined-search"
              label="Search for books"
              type="search"
              size='small'
              fullWidth sx={{ mt: 4 }} />
          </Container>
        </Box>
        {/* End hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <BookCard key={card} />
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}