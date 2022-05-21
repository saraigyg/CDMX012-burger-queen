import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/bqentrance.png';
import IconChips from './IconChips.js';
import AlignItemsList from './MenuElement';


export default function MediaCard() {
  return (
    <Card sx={{maxWidth: 600, borderRadius:10, margin:'7em'}}>
      <CardMedia
        component="img"
        height="480"
        image= {MainLogo}
        alt="bq-entrance-img"
      />
      <IconChips></IconChips>
      <CardContent>
        <Typography style={{marginLeft:'1em'}} gutterBottom variant="h5" component="div">
        Choose the food choices to place the order:
        </Typography>
      </CardContent>
      <CardActions>
      <AlignItemsList></AlignItemsList> 
         {/*  <ListItem></ListItem><CheckboxListSecondary></CheckboxListSecondary> */}
          <Button width={100} height={100} className="lunchMenu" variant="contained" 
          style={{marginLeft:'2em', marginBottom:'1.5em', backgroundColor: "rgb(52, 45, 41)"}}>
            <Link to="" style={{color: "white", textDecoration:"none", padding:'0.5em'}} onClick={() => {
              console.info("I'm a button.");
            }} >Place order</Link>
            </Button>
      </CardActions>
    </Card>
  );
}


