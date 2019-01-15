import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
});

const ChatHeader = ({classes}) => (

  <AppBar  className={classes.appBar}>
  <Toolbar>
    <Typography variant="h6" color="inherit" noWrap>
      React Chat
    </Typography>
  </Toolbar>
</AppBar>
);

export default withStyles(styles)(ChatHeader);
