import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 2)
  },
  paper: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5, 2)
  },
  input: {
    width: '100%'
  },
  name: {
    width: '20%'
  },
  divider: {
    width: 1,
    height: 24
  },
  fileInput: {
    display: 'none'
  }
}));

const ConversationForm = props => {
  const { flights_socket, className, ...rest } = props;

  const classes = useStyles();

  
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const nameChange = event => {
    event.persist();

    setName(event.target.value);
  };

  const handleChange = event => {
    event.persist();

    setValue(event.target.value);
  };

  const handleAttach = () => {
    flights_socket.emit("CHAT",{name: name, message: value});
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Input
          className={classes.name}
          disableUnderline
          onChange={nameChange}
          placeholder="Name"
        />
      <Paper
        className={classes.paper}
        elevation={1}
      >
        
        <Input
          className={classes.input}
          disableUnderline
          onChange={handleChange}
          placeholder="Leave a message"
        />
      </Paper>
      <Tooltip title="Send">
        <IconButton color={'default'}
        onClick={handleAttach}>
          <SendIcon />
        </IconButton>
      </Tooltip>
    
    </div>
  );
};

ConversationForm.propTypes = {
  className: PropTypes.string
};

export default ConversationForm;
