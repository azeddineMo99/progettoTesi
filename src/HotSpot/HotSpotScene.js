import React from 'react';
import { StyleSheet, Text, View, Image, asset, VrButton } from 'react-360';

const styles = StyleSheet.create({
  image: {
    top: 55,
    position: 'absolute',
    borderRadius: 32,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  arrow: {
    width: 40,
    height: 45,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});


export default class HotSpotScene extends React.Component {
    state = {
      isButtonHovered: false,
    };
  
    handleButtonEnter = () => {
      this.setState({ isButtonHovered: true });
    };
  
    handleButtonExit = () => {
      this.setState({ isButtonHovered: false });
    };
  
    handleButtonClick = () => {
      if (this.props.onClick) {
        this.props.onClick();
      }
    };

    renderArrowIcon = () => {
      return (
        <Image
          source={asset('ttt-Photoroom.png')}
          style={styles.arrow}
        />
      )
    }
  
    render() {
      const highlightedBoxStyle = {
        backgroundColor: this.state.isButtonHovered ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
        width: this.state.isButtonHovered ? 50 : 40,
        height: this.state.isButtonHovered ? 50 : 40,
      };
      
      return (
        <View
          style={{
            top: this.props.top,
            left: this.props.left,
            position: 'absolute',
          }}
        >
          <VrButton 
            style={[styles.box, highlightedBoxStyle]}
            onClick={this.handleButtonClick}
            onEnter={this.handleButtonEnter}
            onExit={this.handleButtonExit}
          >
            {this.renderArrowIcon()}
          </VrButton>
                     
        </View>
      );
    }
  }