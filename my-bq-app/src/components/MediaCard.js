import * as React from 'react';
import Card from '@mui/material/Card';
import MainLogo from '../assets/bq.png';
import CardMedia from '@mui/material/CardMedia';

import "../styles/MediaCard.css";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        height="500"
        image= {MainLogo}
        alt="bq-entrance-img"
      />
    </Card>
  );
}
