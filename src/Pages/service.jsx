import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// OPTION A: If your image is inside the "src/assets" folder, uncomment the next line:
// import lizardPic from './assets/lizard.jpg'; 

export default function service() { 
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"       /* 1. Forces it to render as an <img> tag */
        // height="100"          /* 2. Sets explicit height */
        
        // OPTION B: If using a public folder image, use a string path:
        image="https://images.unsplash.com/photo-1513039763578-cf2c1c5f8750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGl6YXJkfGVufDB8fDB8fHww" 
        
        // OPTION A: If you imported the local file above, use this instead:
        // image={lizardPic} 
        
        alt="green iguana"    /* 3. Uses standard image alt text */
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
