import * as React from 'react';
import Card from '@mui/material/Card';
import MainLogo from '../assets/bqentrance.png';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputWithIcon from './InputSection.js';
import CupCoffee from '../assets/coffee.png';
import Lunch from '../assets/lunch.png';
import { Link } from "react-router-dom";
import "../styles/MediaCard.css";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 600, borderRadius:10, margin:'7em' }}>
      <CardMedia
        component="img"
        height="480"
        image= {MainLogo}
        alt="bq-entrance-img"
      />
      <CardContent>
        <Typography style={{marginLeft:'1em'}} gutterBottom variant="h5" component="div">
          Type down customer's name please:
        </Typography>
        <InputWithIcon ></InputWithIcon>
        <Typography style={{marginLeft:'1em'}} variant="h5" color="text.primary">
          Choose a menu category:
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
