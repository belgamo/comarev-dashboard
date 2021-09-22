import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { useHeader } from './dashboard.hooks';
import { menu } from '../../menu';

const Dashboard = () => {
  const [state, setState] = useState({
    left: false,
  });

  const user = useSelector((state) => state.user);

  const classes = useStyles();

  const { handleMenu, anchorEl, open, handleClose, handleSignOut } =
    useHeader();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu
          .filter((item) => user.admin || !item.admin)
          .map((item) => {
            const Icon = item.icon;

            return (
              <ListItem button key={item.label}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <div data-testid='hamburger-menu'>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Typography variant='h6' className={classes.title}>
              Olá, {user.full_name}
            </Typography>
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </div>
    </>
  );
};

export default Dashboard;
