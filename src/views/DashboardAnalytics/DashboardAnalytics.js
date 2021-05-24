import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
// ES6 import or TypeScript
import { io } from 'socket.io-client';
import flights_socket from 'websocket';
import { Page } from 'components';
import {
  ConversationDetails,
  FinancialStats,
  LatestOrders
} from './components';
import { ArrowRight, SettingsApplications } from '@material-ui/icons';
import { forEach } from 'lodash-es';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  },
  top: {
    height: "100%",
  }
}));

//const io = require("socket.io-client");
//const socket = io("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl");

flights_socket.emit("FLIGHTS");

const DashboardAnalytics = () => {
  const classes = useStyles();
  const [position, setPosition] = useState([]);
  const [prevData, setPrevData] = useState(null);
  const [actualData, setactualData] = useState([]);
  const [carga, setCarga] = useState(false);
  const [chat, setChat] = useState([])
  const [vuelos, setVuelos] = useState(null);
  var dictPrevData={}
  var dictActualData={}
  var dictChat={}
  var dictVuelos={}
  
  let j=0;

  useEffect(() => {
    console.log('pide flights')
    flights_socket.once("FLIGHTS", (arg) => {
      console.log(arg,'argumento');
      setPrevData(arg)
      setCarga(true)
      var i;
      for (i =0; i<  arg.length; i++) {
        console.log('llenando vuelos')
        dictVuelos[i]=
          {
            code: arg[i].code,
            record: [],
            actual: null
          }
      }
      console.log(dictVuelos,'prevDrata'); 
      setactualData(dictVuelos);
      setVuelos(dictVuelos)
    })
  }, []);
  useEffect(() => {
  //   flights_socket.on("POSITION", (arg) => {
  //     if (vuelos){
  //       console.log(vuelos[0],'vuelo primero')
  //     }
  //     console.log(vuelos,'vuelos antes')
  //   if (vuelos && vuelos[0]){
  //     var i;
  //         dictVuelos=vuelos
  //         console.log('cambio de posicion')
  //         for (i =0; i < prevData.length; i++) {
  //           if (arg.code === vuelos[i].code) {
  //             dictVuelos[i].actual = arg.position 
  //         }}
  //         setVuelos(dictVuelos)
      
  //   }
  // })
    let tempArr=[]
  flights_socket.on("CHAT", async (arg) => {
    console.log(arg); // world
    //setChat(arg);
    tempArr = [...chat];
     tempArr.push(arg);
     setChat(tempArr);
  })
  })
  
  

  return (
    <Page
      className={classes.root}
      title="Flight Dashboard"
    >
      {/* <Header /> */}
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        {/* <Grid
          item
          xs={12}
        >
          <Overview />
        </Grid> */}
        <Grid
          item
          lg={8}
          xl={9}
          xs={12}
        >
          <FinancialStats vuelos={vuelos} prevData={prevData} position={position} actualData={actualData}   />
        </Grid>
        <Grid
          item
          lg={4}
          xl={3}
          xs={3}
        >
          {/* <EarningsSegmentation /> */}
          <ConversationDetails chat={chat} className={classes.top} 
          /> 
        </Grid>
        <Grid
          item
          lg={8}
          xs={12}
        >
          <LatestOrders  />
        </Grid>
        
      </Grid>
    </Page>
  );
};

export default DashboardAnalytics;
