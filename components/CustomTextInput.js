import React from 'react';
import { View, Text, VrButton } from 'react-360';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (this.state.isFocused) {
      if (event.key === 'Backspace') {
        this.setState(prevState => ({
          text: prevState.text.slice(0, -1)
        }), this.notifyChange);
      } else if (event.key.length === 1) {
        this.setState(prevState => ({
          text: prevState.text + event.key
        }), this.notifyChange);
      }
    }
  };

  notifyChange = () => {
    if (this.props.onChangeText) {
      this.props.onChangeText(this.state.text);
    }
  };

  toggleFocus = () => {
    this.setState(prevState => ({
      isFocused: !prevState.isFocused
    }));
  };

  render() {
    const { style, placeholder } = this.props;
    const { text, isFocused } = this.state;

    return (
      <VrButton onClick={this.toggleFocus}>
        <View style={[styles.input, style, isFocused && styles.focused]}>
          <Text style={styles.text}>
            {text || placeholder}
          </Text>
        </View>
      </VrButton>
    );
  }
}

const styles = {
  input: {
    borderColor: '#ccc',
    borderWidth: 0.01,
    padding: 0.02,
    width: 1,
    height: 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  focused: {
    borderColor: '#007AFF',
  },
  text: {
    color: 'black',
    fontSize: 0.08,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
};