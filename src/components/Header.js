import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
import CoronaLogo from '../assets/logos/logo.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Box
          component="img"
          sx={{height: 65}}
          alt="logo."
          src={CoronaLogo}
        />
        <Typography
          variant="h6"
          noWrap
          component="p"
        >
                        CORONAVIRUS STATS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
