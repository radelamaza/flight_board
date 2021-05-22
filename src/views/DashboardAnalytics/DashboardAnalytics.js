import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
// ES6 import or TypeScript
import { io } from 'socket.io-client';

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

const flights_socket = io("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
  path: '/flights'
});

const DashboardAnalytics = () => {
  const classes = useStyles();
  const [position, setPosition] = useState([]);
  const [prevData, setPrevData] = useState(null);
  const [actualData, setactualData] = useState([]);
  const [carga, setCarga] = useState(false);
  
  flights_socket.on("FLIGHTS", (arg) => {
    console.log(arg,'argumento');
    setPrevData(arg)
    setCarga(true)
    let arreglo =[]
    var i;
    for (i =0; i<  arg.length; i++) {
      //console.log(actualData.length)
      arreglo.push(
        {
          code: arg[i].code,
          record: [],
          actual: null
        }
      )
    }
    setactualData(arreglo);
    console.log(prevData,'prevDrata'); // world
    console.log(arreglo);
    console.log(carga);
  });
  // flights_socket.on("CHAT", async (arg) => {
  //   console.log(arg); // world
  //   //setChat(arg);
  //   let tempArr = [...chat];
  //    tempArr.push(arg);
  //    setChat(tempArr);
  // });
  // async function agregar(arg) {
  //   await forEach(actualData, (vuelo) => {

  //   })
  // }
  let j=0;
  // flights_socket.on("POSITION", (arg) => {
  //   setPosition(arg)
  //   console.log(position)
  // });
  // flights_socket.on("POSITION", (arg) => {
  //    //console.log(arg.position); // world
      
  //     j++;
  //     if (j==13){
  //     if (actualData.length>0){
  //       let i=0;
  //       let data=[...actualData]
  //     for (i =0; i<  actualData.length; i++) {
  //       if (arg.code==actualData[i].code) {
  //         data[i]={
  //           code: arg.code,
  //           record: [],
  //           actual: arg.position
  //         }
       
  //     }}
     
  //     setactualData(data)
  //     //console.log(actualData, 'Fuera Loop')
  //   } else {
  //     console.log('no se han cargaado los datos')
  //   }
  //   j=0
  //    }});
  // flights_socket.on("POSITION", (arg) => {
    
  //   if (j==4){
  //   console.log(arg,j); // world
  //   j=0}
  //   j++;
  //   });
    
  
  useEffect(() => {
    if (!carga) {
    console.log('pide flights')
    flights_socket.emit("FLIGHTS");
    }
    console.log('effect')
  }, []);

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
          <FinancialStats  prevData={prevData} position={position} actualData={actualData} flights_socket={flights_socket}  />
        </Grid>
        <Grid
          item
          lg={4}
          xl={3}
          xs={3}
        >
          {/* <EarningsSegmentation /> */}
          <ConversationDetails className={classes.top} flights_socket={flights_socket}
          /> 
        </Grid>
        <Grid
          item
          lg={8}
          xs={12}
        >
          <LatestOrders flights_socket={flights_socket} />
        </Grid>
        
      </Grid>
    </Page>
  );
};

export default DashboardAnalytics;
