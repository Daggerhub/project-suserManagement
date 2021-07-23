import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: 20
  },
  tabs: {
    color: '#FFFFFF',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 20
}
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <NavLink className={classes.title} to="/" exact>User Management</NavLink>

          <NavLink className={classes.tabs} to="/add" exact>All Users</NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}