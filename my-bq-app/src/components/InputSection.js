import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

export default function InputWithIcon() {
{/* const [name, setName]= useState(initialstate: '');
   
   function handleChange(e) {
     setName(e.target.value);
   } */}
  return (
    <Box  width={1000} height={100} sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl style={{marginLeft:'2em', marginTop:'1em', fontSize: '1em'}} variant="standard">
        <InputLabel style={{fontSize:'1.5em'}} htmlFor="input-with-icon-adornment"  > {/* handleChange={handleChange}*/}
          Required * 
        </InputLabel>
        <Input 
        style={{fontSize:'2em'}}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle  />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

