import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Modal,
  Tooltip,
  colors
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import axios from 'utils/axios';
import { Label, GenericMoreButton } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  progressContainer: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const labelColors = {
  complete: colors.green[600],
  pending: colors.orange[600],
  rejected: colors.red[600]
};

const LatestOrders = props => {
  const { className, flights_socket, ...rest } = props;
  const [flights, setFlights] = useState(null);
  const classes = useStyles();
  const [articleModal, setArticleModal] = useState({
    open: false,
    tipe: null,
    article: null
  });
  // const flights_socket = io("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
  // path: '/flights'
  // });
  flights_socket.on("FLIGHTS", (arg) => {
    console.log(arg); // world
    setFlights(arg)
  });

  const handleModalClose = () => {
    setArticleModal({
      open: false,
      article: null
    });
  };
  let i=0
  const handleArticleClick = value =>  {
    //const selected = articles.find(article => article.id === info.article.id);
    i+=1
    console.log(value,  i, 'fliht')
    // setArticleModal({
    //   open: true,
    //   tipe: 'edit',
    //   article: value
    // });
  };





  useEffect(() => {
    console.log('pide flights')
    flights_socket.emit("FLIGHTS");
    flights_socket.on("FLIGHTS", (arg) => {
      console.log(arg); // world
      setFlights(arg)
    });

  }, []);
  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Información de vuelos"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className={classes.inner}>
            {flights && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sortDirection="desc">
                      <Tooltip
                        enterDelay={300}
                        title="Sort"
                      >
                        <TableCell
                        >
                          Código
                        </TableCell>
                      </Tooltip>
                    </TableCell>
                    <TableCell>Aerolinea</TableCell>
                    <TableCell>Avión</TableCell>
                    <TableCell>Nro Pasajeros</TableCell>
                    <TableCell>Asientos</TableCell>
                    <TableCell align="right">Más</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {flights.map(flight => (
                    <TableRow
                      hover
                      key={flight.code}
                    >
                      <TableCell>{flight.code}</TableCell>
                      <TableCell>{flight.airline}</TableCell>
                      <TableCell>{flight.plane}</TableCell>
                      <TableCell>{flight.passengers.length}</TableCell>
                      <TableCell >
                        {flight.seats} 
                      </TableCell>
                      
                      <TableCell align="right">
                        <Button
                          color="black"
                          value={'hola'}
                          component={RouterLink}
                          size="small"
                          to={"/flight_board/"+flight.code}
                          variant="outlined"
                        >
                          Más
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
