import React, { Component } from 'react';
import { View, Text } from 'react-360';

class TextInputCustom extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleKeyDown = (event) => {
    // Check for key inputs
    if (event.nativeEvent.key === 'Backspace') {
      this.setState((prevState) => {
        const newValue = prevState.inputValue.slice(0, -1);
        this.props.onChange(newValue); // Call the onChange prop
        return { inputValue: newValue };
      });
    } else if (event.nativeEvent.key.length === 1) {
      this.setState((prevState) => {
        const newValue = prevState.inputValue + event.nativeEvent.key;
        this.props.onChange(newValue); // Call the onChange prop
        return { inputValue: newValue };
      });
    }
  };

  render() {
    // Set a listener for key events - Modify to suit your framework’s capabilities if necessary
    return (
      <View
        style={{ alignItems: 'center', marginBottom: 20 }}
        onKeyDown={this.handleKeyDown} // Use appropriate listener in your environment
        tabIndex={0} // Ensure the view can receive focus for key events
      >
        <Text style={{ fontSize: 24, marginBottom: 10 }}>Input: {this.state.inputValue}</Text>
        <Text style={{ fontSize: 18, color: 'gray' }}>Type text and use Backspace to delete</Text>
      </View>
    );
  }
}

export default TextInputCustom;
