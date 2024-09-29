import React, { Component } from 'react';
import {View, Text, VrButton, StyleSheet, Environment} from 'react-360';
import TextInputCustom from './TextInputCustom.js'


// Login Page Component
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(newValue) {
    this.setState({ inputValue: newValue });
  }

  // Event Handlers
  handleLogin = () => {
    console.log('Logging in with ${this.state.email}');
  };

  handleGuestLogin = () => {
    console.log('Continuing as guest');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Existing User</Text>

        {/* Email Input */}
        <TextInputCustom
          
          placeholder="Email Address"
          onChange={this.handleInputChange}
          value={this.state.email}
        />
        <Text style={{ fontSize: 24 }}>You typed: {this.state.inputValue}</Text>

        {/* Password Input */}
        <TextInputCustom
          
          placeholder="Password"
          onChange={this.handleInputChange}
          value={this.state.password}
        />

        {/* Log In Button */}
        <VrButton style={styles.loginButton} onClick={this.handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </VrButton>

        <Text style={styles.orText}>OR</Text>

        {/* Continue as Guest Button */}
        <VrButton style={styles.guestButton} onClick={this.handleGuestLogin}>
          <Text style={styles.buttonText}>Continue as Guest</Text>
        </VrButton>

        
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    width: 1000,
    height: 600,
    backgroundColor: '#123456',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputField: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: 40,
    height: 20,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
  },
  guestButton: {
    width: 40,
    height: 20,
    backgroundColor: '#6C757D',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 9,
  },
  orText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 10,
  },
  logoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  logoSubText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default LoginPage;