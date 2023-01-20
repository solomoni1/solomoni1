import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography>This is App Bar</Typography>
      </Toolbar>
    </AppBar>
  );
}
