import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from './Logo.gif';
import {NavLink} from 'react-router-dom';



const drawerWidth = 240;


function Navjp(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src={Logo} alt="loading..." />
      </Typography>
      <Divider />
      <List>
      <NavLink style={{textDecoration: 'none'} } to={'/eng'}>
        <ListItem key={'英語'} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'black'}}>
              <ListItemText primary={'英語'} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      
          <NavLink style={{textDecoration: 'none'} } to={'/'}>
          <ListItem key={'スペイン語'} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'black'}}>
              <ListItemText primary={'スペイン語'} />
            </ListItemButton>
          </ListItem>
          </NavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='initial' component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={Logo} alt="loading..." />
    
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NavLink style={{textDecoration: 'none'} } to={'/eng'}>
          <Button key={'英語'} sx={{color:'#fff'}}>英語</Button>
          </NavLink>

          <NavLink style={{textDecoration: 'none'} } to={'/'}>
          <Button key={'スペイン語'} sx={{color:'#fff'}}>スペイン語</Button>
          </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navjp.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navjp;