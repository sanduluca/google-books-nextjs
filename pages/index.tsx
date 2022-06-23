import React, { Fragment, useCallback, useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { debounce } from "ts-debounce";
import AppBar from '../src/components/AppBar'
import Footer from '../src/components/Footer'
import BookCard, { Volume } from '../src/components/BookCard'
import { QueryFunctionContext, useInfiniteQuery } from 'react-query';
import SearchContext from '../src/SearchContext';


const PER_PAGE = 12

interface VolumesResponse {
  kind: string
  totalItems: number
  items: Volume[]
}

const fetchVolumes = ({ pageParam = 0, queryKey }: QueryFunctionContext) =>
  fetch(`https://www.googleapis.com/books/v1/volumes?maxResults=${PER_PAGE}&startIndex=${pageParam * PER_PAGE}&q=${queryKey[1]}`)
    .then(r => r.json())

export default function Home() {

  const { searchQuery, setSearchQuery } = useContext(SearchContext)

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<VolumesResponse>(['volumes', searchQuery], fetchVolumes, {
    getNextPageParam: (lastPage, pages) => {
      if (Math.ceil(lastPage.totalItems / PER_PAGE) > pages.length) {
        return pages.length + 1
      }
      return undefined
    },
    enabled: !!searchQuery,
    refetchOnWindowFocus: false,
  })

  const debouncedSetSearchQuery = useCallback(debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, 800), [])


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
              defaultValue={searchQuery}
              fullWidth sx={{ mt: 4 }}
              onChange={debouncedSetSearchQuery}
            />
          </Container>
        </Box>
        {/* End hero unit */}
        <Container sx={{ py: 8 }} maxWidth="lg">

          <Grid container spacing={4}>
            {
              isLoading ? <div>Loadding...</div> :
                isError ? <div>Error</div> :
                  data?.pages.map((response, i) => {
                    return (
                      <Fragment key={i}>
                        {response.items.map((volume) => (
                          <BookCard key={volume.id} volume={volume} />
                        ))}
                      </Fragment>
                    )
                  })
            }

          </Grid>
        </Container>
        <Container sx={{ py: 2 }} maxWidth="lg">
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? <Button variant="outlined" fullWidth onClick={() => {
                fetchNextPage()
              }}>Load more</Button>
              : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}