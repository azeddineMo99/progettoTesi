import React from 'react';
import { View, Environment, asset, Image, VrButton, Text, StyleSheet } from 'react-360';

const styles = StyleSheet.create({
   
    box: {
        flexDirection: 'row', // Lays out items horizontally
        justifyContent: 'space-between', // Space between the text and image
        alignItems: 'center', // Centers items vertically
        width: 700,
        height: 500,
        backgroundColor: 'blue',
        opacity: 0.8
    },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 30,
        color: 'white',
    },
    text: {
        fontSize: 50,
        color: 'grey',
        width: 200, // Limit width for text
    },
    image: {
        width: 700,
        height: 500,
    }
    });

export default class LoginPage extends React.Component{
    componentDidMount() {
        this.updateScene({});
    }

    changeScene = () => {
        window.React360.changeToScene();
    };

    updateScene = () => {
        Environment.setBackgroundImage(asset(this.props.accesso.sfondo));
    }
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.text}>
                    React 360: Benvenuti al tour virtuale della facolta di ingegneria
                </Text>
                <Image
                source={asset(this.props.accesso.prima)}
                style={styles.image}
                />
                <VrButton onClick={this.changeScene} style={styles.button}>
                    <Text style={styles.buttonText}>avvia tour</Text>
                </VrButton>

                

            </View>
        )
    }

}
/*
                <Model
                 source={{
                    obj: asset(this.props.accesso.primo),
                    mtl: asset(this.props.accesso.secondo),
                 }}
                 style={{transform:[
                    {translate: [-10, 0, -10]},
                    {scaleX: 0.02 },
                    { scaleY: 0.02 },
                    { scaleZ: 0.02 },
                  ]}}
                />
                */