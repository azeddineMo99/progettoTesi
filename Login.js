import React from 'react';

//import LoginPage from './LoginPage.js';
import { StyleSheet, View, Environment, asset, Model, VrButton, Text } from 'react-360';
import config from './src/universita.json';

const styles = StyleSheet.create({
   
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 800,
        height: 500,
        backgroundColor: 'blue',
        opacity: 0.8
      },
      button: {
        backgroundColor: 'blue',
        padding: 20,
        marginTop: 100,
      },
      buttonText: {
        fontSize: 30,
        color: 'white',
      },
    });

export default class Login extends React.Component {
    
    componentDidMount() {
        this.updateScene({});
        console.log(`mia finestra ${window}`);
        console.log(`mia finestra2 ${window.React360}`);
    }

    changeScene = () => {

        window.React360.changeToScene();
    };

    updateScene = () => {
        Environment.setBackgroundImage(asset(config.accesso.sfondo));
    }

  render() {
    console.log(`obj: ${config.accesso.primo}`);
    console.log(`mtl: ${config.accesso.secondo}`);
    return (
        <View style={styles.box}>
            <Model
                source={{
                    obj: asset(config.accesso.primo),
                    lib: asset(config.accesso.secondo)

                }}
                style={{transform:[
                    {translate: [-10, 0, -10]},
                    {scaleX: 0.02 },
                    { scaleY: 0.02 },
                    { scaleZ: 0.02 },
                  ]}}
            />
            
                <Text>Benvenuti al tour virtuale della facolta di ingegneria</Text>
                <VrButton onClick={this.changeScene} style={styles.button}>
                    <Text style={styles.buttonText}>avvia tour</Text>
                </VrButton>
            </View>
      
    );
  }
}