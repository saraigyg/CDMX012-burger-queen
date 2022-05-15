import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import FastfoodIcon from '@mui/icons-material/Fastfood';


export default function IconChips() {
  return (
    <Stack style={{marginLeft:'2em'}} direction="row" spacing={1}>
      <Chip style={{backgroundColor:'rgba(237, 205, 186, 0.5)', fontSize:'1.2em', padding:'0.5em' }} 
      icon={<LocalCafeIcon/>} label="Breakfast Menu" />
    </Stack>
  );
}
