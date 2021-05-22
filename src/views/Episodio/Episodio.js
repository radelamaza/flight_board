import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Page, SearchBar } from 'components';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { Header, Actors, EpisodeInfo } from './components';
import { Button } from '@material-ui/core';
import { io } from 'socket.io-client';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  members: {
    marginTop: theme.spacing(3)
  }
}));

const flights_socket = io("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
  path: '/flights'
});
const Episodio = props => {
  const { match, history ,className, ...rest} = props;
  const classes = useStyles();
  const { id } = match.params;
  const [carga,setCarga] = useState(false)
  const [booleano, setBooleano] = useState(false);
  const [episode, setEpisode] = useState();
  
  flights_socket.on("FLIGHTS", (arg) => {
    console.log(arg,'argumento');
    setCarga(true)
    let arreglo =[]
    var i;
    for (i =0; i<  arg.length; i++) {
      //console.log(actualData.length)
      if(arg[i].code==id){
        setEpisode(arg[i])
      }
    }
    
  });
  
  useEffect(() => {
    if (!carga) {
      console.log('pide flights')
      flights_socket.emit("FLIGHTS");
      }
    
  }, []);
  
  const handleVolverAtras = () => {
    window.history.back()
  }
  return (
    <Page
      className={classes.root}
      title={'Prueba'}
    >
      <Button
            color="primary"
            variant="contained"
            onClick={handleVolverAtras}
          >
            Volver Atrás
          </Button> 
       
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={8}
        xl={9}
        xs={12}
      >
      {episode &&
      <EpisodeInfo
      className={classes.results}
        episode={episode}
      />}
      </Grid>
      <Grid
        item
        lg={4}
        xl={3}
        xs={12}
      >{episode &&
        <Actors
          className={classes.members}
          actors={episode.passengers}
        />}
      </Grid>
      </Grid>
    </Page>
  );
};
Episodio.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Episodio;
