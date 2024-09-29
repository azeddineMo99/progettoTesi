import React from 'react';
import { StyleSheet, Text, View, Image, asset, Animated } from 'react-360';

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
  },
  box: {
    padding: 10,
    width: 300,
   
    position: 'absolute',
    zIndex: 2,
  },
  imageInfo: {
    width: 450,
    height: 400,
    zIndex: 1,
  },
  text: {
    fontSize: 20,
  },
});

const ANIMATION_DURATION = 500;

export default class HotSpotImmagine extends React.Component {
  state = {
    infoCardOpacity: new Animated.Value(0),
  };

  handleInfoEnter = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start();
  };

  handleInfoExit = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start();
  };

  renderInfoIcon = () => {
    return (
      <Image
        source={asset('info_icon.png')}
        style={styles.image}
        onEnter={this.handleInfoEnter}
      />
    );
  };
 

  renderInfoImage = () => {
    console.log("primo testo");
    console.log(this.props.immagine);
    return (
      <Animated.View
        style={[styles.box, { opacity: this.state.infoCardOpacity }]}
      >
        
        <Image
        source={asset(this.props.immagine)}
        style={styles.imageInfo}
        />
      </Animated.View>
    );
  };

  get locationStyle() {
    return {
      left: this.props.left,
      top: this.props.top,
      position: 'absolute',
    };
  }

  render() {
    return (
      <View style={this.locationStyle} onExit={this.handleInfoExit}>
        {this.renderInfoImage()}
        {this.renderInfoIcon()}
      </View>
    );
  }
}