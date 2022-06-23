import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '../Link';

export interface Volume {
  id: string
  selfLink: string
  volumeInfo: {
    title: string
    subtitle: string
    description: string
    authors: string[]
    publisher: string
    publishedDate: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
  }

  categories: string[]
  pageCount: number
  averageRating: number
  ratingsCount: number
}


export default function BookCard({ volume, hideViewBtn }: { volume: Volume, hideViewBtn?: boolean }) {
  return (

    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={volume.volumeInfo.imageLinks?.thumbnail}
          alt={volume.volumeInfo.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2">
            {volume.volumeInfo.title}
          </Typography>
          <Typography>
            {volume.volumeInfo.subtitle}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: hideViewBtn ? 'flex-end' : 'space-between' }}>
          {!hideViewBtn && <Button variant="text" component={Link} noLinkStyle href={`/book/${volume.id}`}>
            View
          </Button>}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>

  );
}