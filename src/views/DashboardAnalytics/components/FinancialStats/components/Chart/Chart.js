import React, { useEffect, useState, useRef } from 'react';
import {
  Map, Marker, Popup, TileLayer, Polyline
} from 'react-leaflet';
import { Icon } from 'leaflet';
import PropTypes, { func } from 'prop-types';
import { io } from 'socket.io-client';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';
import { colors } from '@material-ui/core';
import './map.scss';
import 'leaflet/dist/leaflet.css'; 
import { Height } from '@material-ui/icons';

export const resi = new Icon({
  iconUrl: 'https://cdn1.iconfinder.com/data/icons/travel-line-good-life/512/plane-512.png',
  iconSize: [50, 50],
});
export const meicon = new Icon({
  iconUrl: 'https://cdn1.iconfinder.com/data/icons/basic-e-commerce/512/14-512.png',
  iconSize: [50, 50],
});

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    height: 400
  }
}));
// const flights_socket = io("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl", {
//   path: '/flights'
// });

const Chart = props => {
  const {  planes, actualData, prevData, flights_socket, className, ...rest } = props;
  //const [actualData, setactualData] = useState([])
  const classes = useStyles();
  const [carga, setCarga] = useState(false)
  const theme = useTheme();
  const [vuelos, setVuelos] = useState(prevData);
  //const [newUserData, setNewUserData] = useState({});
  const [position, setPosition] = useState(true);
  const latitudeDefault = -37;
  const longitudeDefault = -65;
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const dataDefault = {
    latitude: latitudeDefault,
    longitude: longitudeDefault,
    vehicle_identifier: '',
  };
  

  // flights_socket.on("FLIGHTS", (arg) => {
  //   //console.log(arg,'argumento');
  //   setPrevData(arg)
  //   setCarga(true)
  //   let arreglo =[]
  //   var i;
  //   for (i =0; i<  arg.length; i++) {
  //     //console.log(actualData.length)
  //     arreglo.push(
  //       {
  //         code: arg[i].code,
  //         record: [],
  //         actual: null
  //       }
  //     )
  //   }
  //   if (arreglo.lenght>0){
  //     console.log('seguaaarda')
  //   setactualData(arreglo);}
  //   console.log(prevData,'prevDrata'); // world
  //   console.log(actualData,'aactualdataa');
  //   console.log(carga);
  // });




  let j=0;
  //  flights_socket.on("POSITION", (arg) => {
  //       j++;
  //       if (j==6){
  //       if (prevData){
  //        var i;
  //          let data=[...prevData]
  //          if(!carga){
  //           let arreglo =[]
  //             var i;
  //             for (i =0; i<  prevData.length; i++) {
  //               arreglo.push(
  //                 {
  //                   code: prevData[i].code,
  //                   record: [],
  //                   actual: null
  //                 }
  //               )
  //             }
  //            setVuelos(arreglo)
  //            setCarga(true)
  //          } else{ console.log('cambio de posicion')
  //        for (i =0; i<  prevData.length; i++) {
  //         if (arg.code==vuelos[i].code) {
  //           data[i].actual= arg.position 
  //        }}
  //       console.log('voy a guardar')
  //         setVuelos(data)
  //     }}
  //      j=0
  //     }});

  useEffect(() => {
    console.log('effect')
   }, []);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div>
      <Map center={[dataDefault.latitude, dataDefault.longitude]} zoom={4}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          
        />
        {/* <Marker
          key={1}
          position={[
            data.latitude,
            data.longitude,
          ]}
          icon={meicon}
        >
          <Popup>
            <p>Mi Posición</p>
          </Popup>
        </Marker> */}
        {/* {planes[0] &&
        <Marker
        position={planes}
        icon={resi}
      >
        <Popup>
          <p>{planes[0]}</p>
        </Popup>
      </Marker>} */}
      {/* {renderPlanes} */}
         {prevData && prevData.map((pos) => (
          (pos)
                && (
                <Marker
                  position={pos.origin}
                  icon={meicon}
                >
                  <Popup>
                    <p>
                      Origen
                      
                    </p>

                  </Popup> 
                </Marker>
                
                )
          

        ))} 
        {prevData && prevData.map((pos) => (
          (pos)
                && (
                <Marker
                  position={pos.destination}
                  icon={meicon}
                >
                  <Popup>
                    <p>
                      Destino
                      
                    </p>

                  </Popup> 
                </Marker>
               
                
                )
          

        ))} 
        {prevData && prevData.map((pos) => (
          (pos)
                && (
                <Polyline pathOptions={blackOptions} positions={[pos.origin,pos.destination]}/>
               
                
                )
          

        ))} 
        {/* {actualData && actualData.map((vuelo) => (
          (vuelo.acual)
                && (
                <Polyline pathOptions={limeOptions} positions={vuelo.record}/>
                )
          

        ))}  */}
        {/* {actualData && actualData.map((vuelo) => (
          (vuelo.actual)
                && (
                  <Marker
                  position={vuelo.actual}//vuelo.record[-1]
                  icon={resi}
                >
                  <Popup>
                    <p>
                      {vuelo.code}
                      
                    </p>

                  </Popup> 
                </Marker>
               
                
                )
          

        ))}  */}
        {vuelos && vuelos.map((vuelo) => (
          (vuelo.actual)
                && (
                  <Marker
                  position={vuelo.actual}//vuelo.record[-1]
                  icon={resi}
                >
                  <Popup>
                    <p>
                      {vuelo.code}
                      
                    </p>

                  </Popup> 
                </Marker>
               
                
                )
          

        ))} 
        

      </Map>
    </div>
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string
};

export default Chart;
