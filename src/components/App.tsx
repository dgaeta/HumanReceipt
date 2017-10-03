'use strict';
import * as React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import { Container, Header, Content, Button, Text } from 'native-base';

interface Camera {
  capture: any;
}

export default class App extends React.Component {
  private camera: Camera | undefined;

  constructor() {
    super();

    this.camera = undefined;
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>

            <View
              style={styles.overlayContainer}
            >
              <Button
                style={styles.item}
              >
                <Text>History</Text>
              </Button>

              <Button
                style={styles.item}
                onPress={this.takePicture.bind(this)}
              >
                <Text>Scan</Text>
              </Button>

              <Button
                style={styles.item}
              >
                <Text>Bank</Text>
              </Button>
            </View>
        </Camera>
      </View>
    );
  }

  takePicture() {
    console.log('Clicked CAPTURE');

    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 50
  },
  overlayContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  item: {
    flex: 1
  }
});
