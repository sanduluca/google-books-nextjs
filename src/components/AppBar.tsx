import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function AppBar() {
  return (
    <MuiAppBar position="relative">
      <Toolbar>
        <LibraryBooksIcon sx={{ mr: 2 }} />

        <Typography variant="h6"
          href="/" component={'a'}
          color="inherit"
          noWrap
          sx={{ textDecoration: 'none'}}
        >
          The Book Empire
        </Typography>

      </Toolbar>
    </MuiAppBar>

  );
}