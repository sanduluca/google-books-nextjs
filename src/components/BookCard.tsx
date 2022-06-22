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

export default function BookCard() {
  return (

    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
          }}
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            'A masterpiece of poignant brilliance . . . heartbreaking' Guardian Charlie Gordon, a floor sweeper born with an unusually low IQ, has been chosen as the perfect subject for an experimental surgery that doctors hope will increase his intelligence - a procedure that has been highly successful when tested on a lab mouse named Algernon. All Charlie wants is to be smart and have friends, but the treatement turns him into a genius. Then Algernon begins to fade. What will become of Charlie?
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'space-between' }}>
          <Button size="large">View</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>

  );
}