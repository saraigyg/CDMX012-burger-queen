import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function CheckboxListSecondary() {
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3,4,5,6,7,8].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary= {value} />
            </ListItemButton>
          </ListItem>
        );
      })}
      
    </List>
  );
}
