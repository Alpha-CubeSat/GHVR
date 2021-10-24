import React from 'React'
import {asset} from 'react-360'
import Entity from 'Entity';

export default class CubeSat extends React.Component{
  render(){
    return(

      <Entity
      source={{
        //gltf2: asset('Simplified_Sat.gltf')
        obj: asset('alpha_sail.obj')
      }}
      style={{transform:[
        {scaleX: 0.001 },
        { scaleY: 0.001 },
        { scaleZ: 0.001 },
      ]}}
      />

)}}
