import React from 'react';
import { StyleSheet, Text, View, Image, Video, asset, Animated } from 'react-360';

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
  videoInfo: {
    width: 800,
    height: 500,
    zIndex: 1,
  },
  text: {
    fontSize: 20,
  },
});

const ANIMATION_DURATION = 500;

export default class HotSpotVideo extends React.Component {
  state = {
    infoCardOpacity: new Animated.Value(0),
    status: 'pause',
  };


  handleInfoEnter = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start();
    console.log(`status: ${this.state.status}`);
    this.setState({ status: 'play' });
  };

  handleInfoExit = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 0,
      duration: ANIMATION_DURATION,
    }).start();

    this.setState({ status: 'pause' });
    console.log(`status: ${this.state.status}`)
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

  renderInfoVideo = () => {

    return (
      <Animated.View
        style={[styles.box, { opacity: this.state.infoCardOpacity }]}
      >
        <Video
          source={asset(this.props.video)}
          playControl={this.state.status}
          style={styles.videoInfo}
          muted={false}
          loop={true}

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
        {this.renderInfoVideo()}
        {this.renderInfoIcon()}
      </View>
    );
  }
}