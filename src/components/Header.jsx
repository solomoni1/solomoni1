import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.shape.borderRadius,
}));

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" href="/">
          Solomoni
        </Typography>
        <Search className="search">
          <SearchIcon />
          <InputBase placeholder="Search..." />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
