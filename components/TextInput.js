// CustomTextInput.js
import React from 'react';
import { View, Text, VrButton, StyleSheet } from 'react-360';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.value || '',
    };
  }

  handleInputChange = () => {
    // Handle the logic for updating the text
    // For example, using a button to simulate text entry
    this.props.onChangeText(this.state.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.placeholder}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{this.state.text}</Text>
          <VrButton
            onClick={() => {
              this.setState({ text: '' }); // Simulate clearing or modifying the input
              this.handleInputChange();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 5,
  },
  input: {
    flex: 1,
    color: '#000000',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default CustomTextInput;
