import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import Logo from './test2.png'

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    backgroundColor: '#5e17eb'
  },
  logo: {
    maxWidth: 50,
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={classes.root}

      position="fixed"
    >
      <Toolbar>
        <Link href="https://escamenu.com/">
          <img
            alt="Logo"
            src={Logo}
            className={classes.logo}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
