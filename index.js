import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  VrButton,
  asset,
  View,
  Environment,
  staticResourceURL,
  NativeModules,
} from 'react-360';
import Unity, { UnityContext } from "react-unity-webgl";
import document from 'react-native'



import Entity from 'Entity';

import CubeSat from "./entities/CubeSat.js"

const {VideoModule} = NativeModules;

VideoModule.createPlayer('myplayer');

VideoModule.play('myplayer', {
  source: {url: './static_assets/iss_big_Trim.mp4'},
  stereo: '3DBT',
  loop: false,
});


//Environment.setBackgroundVideo('myplayer');


Environment.setBackgroundImage(
  asset('scr00012.jpg'),
  {format: '2D'}, //one of the formats mentioned above
);


//const player = r360.compositor.createVideoPlayer('myplayer');
// Instantiate the video, but do not play it yet
//player.setSource('./static_assets/iss_big.mp4', '3DBT', 'mp4');


export default class Gold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photos: ['./static_assets/scr00011.jpg','./static_assets/scr00012.jpg'], index:0, zoom:0}
  }
  _nextPhoto = () => {
    let photo = this.state.photos.shift(); //Next photo in array
    Environment.setBackgroundImage(photo, {format: '2D'});
    this.state.photos.push(photo); //Add back to end of array
    this.state.zoom+=1;
    console.log(this.state.zoom)
    this.forceUpdate()
  }
  _checkZoom = () => {
    if (this.state.zoom %2 == 0){
      console.log("even")
      return("The Finger Lakes")
    }else{
      console.log("odd")
      return("Cayuga Lake")
    }
  }

/*
  if (this.state.zoom % 2 === 0){
    lakeX = 0;
    lakeY = 0;
    lakeName = "Cayuga Lake"
  }else if(this.state.zoom % 2 === 1){
    lakeX = 0;
    lakeY = 0;
    lakeName = "Finger Lakes"
  }
*/

//adding webgl: https://stackoverflow.com/questions/50819780/how-can-i-place-unity-webgl-in-my-react-native-app
  render() {
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Welcome to the Alpha Interactive VR Experience
            </Text>
            <CubeSat/>
            <VrButton onClick={this._nextPhoto} style={styles.button}>
              <Text style={styles.buttonText}>{'Click Here to Toggle Altitude'}</Text>
            </VrButton>
          </View>
          <Text style={this.state.zoom %2 == 0 ? styles.zoomText : styles.noZoomText}>
            {this._checkZoom()}
          </Text>
          <View>
           <Unity
             width="500px"
             height="350px"
             onProgress={ this.onProgress }
             src="./Build/WEBGLBuilds.json"
             loader="./Build/UnityLoader.js"
           />
          </View>
        </View></View>


    );
  }
};


const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  buttonText: {
    textAlign: 'center',
  },
  zoomText: {
    fontSize: 15,
  },
  noZoomText: {
    fontSize: 30,
    top: 100,
  }
});

AppRegistry.registerComponent('Gold', () => Gold);
AppRegistry.registerComponent('CubeSat', () => CubeSat);
