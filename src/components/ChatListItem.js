import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import titleInitials from '../utils/title-initial';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({

});

const ChatListItem = ({classes, title}) => (
<ListItem  button>
      <Avatar> {titleInitials(title)}</Avatar>
      <ListItemText primary={title}/>
      </ListItem>
);

export default withStyles(styles)(ChatListItem);
