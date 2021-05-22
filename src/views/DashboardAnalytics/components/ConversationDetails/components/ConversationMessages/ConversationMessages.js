
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';
import ConversationMessage from '../ConversationMessage';
import flights_socket from 'websocket';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    maxHeight: '100%'
  },
  inner: {
    padding: theme.spacing(2)
  }
}));

const ConversationMessages = props => {
  const { className, ...rest } = props;
 
  const [chat, setChat] = useState([]);
  const classes = useStyles();
  flights_socket.on("CHAT", async (arg) => {
      console.log(arg); // world
      //setChat(arg);
      let tempArr = [...chat];
       tempArr.push(arg);
       setChat(tempArr);
    });

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <PerfectScrollbar>
        <div className={classes.inner}>
          {chat.map(message => {
            return (
              <ConversationMessage
                key={message.id}
                message={message} //
              />
            );
          })}
        </div>
      </PerfectScrollbar>
    </div>
  );
};

ConversationMessages.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.array.isRequired
};

export default ConversationMessages;
