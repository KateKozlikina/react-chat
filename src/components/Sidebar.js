import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import AddIcon from '@material-ui/icons/Add';
import ChatList from './ChatList'
import Fab from '@material-ui/core/Fab';





const drawerWidth = 320; 

const styles = theme => ({

  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },



  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },

});

const Sidebar = ({classes, chats}) => (

<Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}      
  >
    <div className={classes.drawerHeader} >
    <TextField
      fullWidth
      margin ='normal'
    placeholder="Search..."
  />
  </div>
    <Divider />
    <ChatList chats={chats}/>
    <Button
        
        color="primary"
        className={classes.newChatButton}
      >
      <AddIcon />
      </Button>
      <Fab color="primary" 
      className={classes.newChatButton}>
        <AddIcon />
      </Fab>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      </BottomNavigation>
</Drawer>

);

export default withStyles(styles)(Sidebar);
