import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import {
  ConversationToolbar,
  ConversationMessages,
  ConversationForm
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.white
  },
  chat: {
    height: 360
  },
  content: {
    padding: 0
  }
}));

const ConversationDetails = props => {
  const { flights_socket, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Chat"
      />
      {/* <ConversationToolbar conversation={conversation} /> */}
      <Divider />
      <ConversationMessages className={classes.chat} flights_socket={flights_socket} />
      <Divider />
      <ConversationForm flights_socket={flights_socket}/>
    </Card>
  );
};

ConversationDetails.propTypes = {
  className: PropTypes.string,
  conversation: PropTypes.object.isRequired
};

export default ConversationDetails;
