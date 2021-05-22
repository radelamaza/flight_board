import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';

import { GenericMoreButton } from 'components';
import { Chart } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  chart: {
    padding: 0,
    height: 400
  }
}));

const FinancialStats = props => {
  const { className,prevData, position, actualData,flights_socket, ...rest } = props;

  const classes = useStyles();


  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Mapa en vivo"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Chart
              className={classes.chart}
              planes={position}
              prevData={prevData}
              actualData={actualData}
              flights_socket={flights_socket}
              // setactualData={setactualData}
            />
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

FinancialStats.propTypes = {
  className: PropTypes.string
};

export default FinancialStats;
