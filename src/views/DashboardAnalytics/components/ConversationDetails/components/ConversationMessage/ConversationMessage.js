import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Avatar, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  authUser: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& $body': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  },
  inner: {
    display: 'flex',
    maxWidth: 500
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  body: {
    backgroundColor: colors.grey[100],
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2)
  },
  content: {
    marginTop: theme.spacing(1)
  },
  image: {
    marginTop: theme.spacing(2),
    height: 'auto',
    width: 380,
    maxWidth: '100%'
  },
  footer: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const ConversationMessage = props => {
  const { message, className, ...rest } = props;

  const classes = useStyles();



  return (
    <div
      {...rest}
      className={clsx(
        classes.root,
        className
      )}
    >
      <div className={classes.inner}>
        {/* <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={message.sender.avatar}
          to="/profile/1/timeline"
        /> */}
        <div>
          <div className={classes.body}>
            <div>
              <Link
                color="inherit"
                component={RouterLink}
                to="/profile/1/timeline"
                variant="h6"
              >
                {message.name}
              </Link>
            </div>
            <div className={classes.content}>
              
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  {message.message}
                </Typography>
            </div>
          </div>
          <div className={classes.footer}>
            <Typography
              className={classes.time}
              variant="body2"
            >
              {Date(message.date)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

ConversationMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.object.isRequired
};

export default ConversationMessage;
// moment(message.date).fromNow()