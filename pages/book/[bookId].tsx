import React from 'react';

import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Container from '@mui/material/Container';
import BookCard, { Volume } from '../../src/components/BookCard';
import AppBar from '../../src/components/AppBar';
import Footer from '../../src/components/Footer';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';





export default function BookPage() {
  const router = useRouter()
  const { isReady, query } = router
  const { bookId } = query

  const { isLoading, isError, data: volume, error } = useQuery<Volume>(['volume', bookId],
    ({ queryKey }) => {
      return fetch(`https://www.googleapis.com/books/v1/volumes/${queryKey[1]}`)
        .then(r => r.json())
    }, {
    enabled: isReady && bookId !== undefined
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (!volume) return null

  return (
    <>
      <AppBar />
      <Container sx={{ py: 8 }} maxWidth="xs">
        {/* <BookCard volume={volume} /> */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <BookCard volume={volume} hideViewBtn />
          </Card>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}