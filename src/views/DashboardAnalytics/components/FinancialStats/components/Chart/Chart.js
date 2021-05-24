import React, { useEffect, useState, useRef } from 'react';
import {
  Map, Marker, Popup, Tooltip,TileLayer, Polyline
} from 'react-leaflet';
import { Icon } from 'leaflet';
import PropTypes, { func } from 'prop-types';
import { io } from 'socket.io-client';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';
import flights_socket from 'websocket';
import './map.scss';
import 'leaflet/dist/leaflet.css'; 
import { Height } from '@material-ui/icons';
import { isNull } from 'lodash-es';

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
    height: 440
  }
}));

const Chart = props => {
  const {  planes, actualData, prevData,  className, ...rest  } = props;
  //const [actualData, setactualData] = useState([])
  const classes = useStyles();
  const [vuelos, setVuelos] = useState(null)
  //const [carga, setCarga] = useState(false)
  const theme = useTheme();
  // var data=[]
  // if(vuelos) {console.log(vuelos,'vuelos')
  //    vuelos.forEach((vuelo)=>{data.push(vuelo)})}
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




  // let j=0;
  // flights_socket.on("POSITION", (arg) => {
  //   console.log(arg)
  //   j++;
  //   if (j==27){
  //   if (prevData){
  //     var i;
  //       let data=[...prevData]
  //       if(!carga){
  //       let arreglo =[]
  //         var i;
  //         for (i =0; i<  prevData.length; i++) {
  //           arreglo.push(
  //             {
  //               code: prevData[i].code,
  //               record: [],
  //               actual: null
  //             }
  //           )
  //         }
  //       setVuelos(arreglo)
  //       setCarga(true)
  //       } else { 
  //       var vuelosData = [...vuelos]
  //       console.log(vuelos)
  //       console.log('cambio de posicion')
  //       for (i =0; i < prevData.length; i++) {
  //         if (arg.code === vuelos[i].code) {
  //           vuelosData[i].actual = arg.position 
  //       }}
  //       setVuelos(vuelosData)
  //     }
  //   }
  //   j=0
  // }})
  var dictVuelos={}
  var Arrrecord=[]
  flights_socket.once("FLIGHTS", (arg) => {
    var i;
    for (i =0; i<  arg.length; i++) {
      dictVuelos[i]=
        {
          code: arg[i].code,
          record: [],
          actual: null
        }
    }
    console.log(dictVuelos,'llebabbbfdafdafdafdaewfwaefdafdsafd')
    setPosition(arg.length)
    setVuelos(dictVuelos)
  })
  flights_socket.on("POSITION", (arg) => {
    
    
    
    //console.log(dictVuelos,'vuelos antes')
  if (dictVuelos && dictVuelos[0]){
    var i;
        //dictVuelos=vuelos
        //console.log(dictVuelos.length,'cambio de posicion')
        for (i =0; i < position; i++) {
          if (arg.code === dictVuelos[i].code) {
            dictVuelos[i].actual = arg.position 
            Arrrecord=dictVuelos[i].record
            Arrrecord.push(arg.position);
            dictVuelos[i].record=Arrrecord
        }}
        setVuelos(dictVuelos)
    
  }
})
  useEffect(() => {
    
   }, []);
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
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
        {vuelos && Object.keys(vuelos).map((vuelo) => (   //bject.keys(vuelos).map((vuelo) 
          
          (vuelos[vuelo].record.length>2) && (
            <Polyline color={'lime'} positions={vuelos[vuelo].record}/>
          )
       
))}
        {vuelos && Object.keys(vuelos).map((vuelo) => (   //bject.keys(vuelos).map((vuelo) 
          
                  (vuelos[vuelo].actual) && (
                      <Marker
  position={vuelos[vuelo].actual}//vuelo.record[-1]
  icon={resi}
>
  <Tooltip>
    <p>
      {vuelos[vuelo].code}
      
    </p>

  </Tooltip> 
</Marker>
                  )
               
        ))} 
        

      </Map>
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string
};

export default Chart;

// (
//   <Marker
//   position={vuelo.actual}//vuelo.record[-1]
//   icon={resi}
// >
//   <Popup>
//     <p>
//       {vuelo.code}
      
//     </p>

//   </Popup> 
// </Marker>


// )