import React, { createRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage';

const styles = theme =>({

  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },

});

class ChatMessageList extends React.Component{


  messageWrapper = createRef();
  
  componentDidMount(){
   // console.log('refs=', this.messageWrapper);
    this.scrollDownHistory();
    //console.log('refs1=', this.messageWrapper);
  }
  componentDidUpdate() {
    //console.log('refsDidUpdate=', this.messageWrapper);
    this.scrollDownHistory();
    //console.log('refs1DidUpdate=', this.messageWrapper);
  }


  scrollDownHistory = () => {   // run this method to execute scrolling. 
    window.scrollTo({
        top:this.messageWrapper.current.scrollHeight, 
        behavior: "smooth"   // Optional, adds animation
    })
}
  // scrollDownHistory(){

    
    
  //    if (mW) {
  //     console.log('mw=', this.messageWrapper);
  //     mW.current.scrollTop = this.messageWrapper.current.scrollHeight;
  //     console.log('mw=', mW.current.scrollTop);
  //    }

  // }

  render(){
    const {classes, messages} = this.props;
    return(
      <div className={classes.messagesWrapper}  ref={this.messageWrapper}>
    {messages && messages.map((message, index) => (
      <ChatMessage key={index} {...message}/>
    ))}
  </div>
    );
  }
}
 export default withStyles(styles)(ChatMessageList);
