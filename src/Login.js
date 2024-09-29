import React from 'react';

import LoginPage from './LoginPage.js';
import config from './universita.json';

export default class Login extends React.Component {
  render() {    
    return (
      <LoginPage
        accesso={config.accesso}
      />      
    );
  }
}