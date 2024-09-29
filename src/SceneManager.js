import React from 'react';
import { View, Environment, asset } from 'react-360';
import { HotSpotScene, HotSpotTesto, HotSpotVideo, HotSpotImmagine } from './HotSpot';

export default class SceneManager extends React.Component {
  
  state = {
    currentSceneId: this.props.firstSceneId,
    preloadedImages: {}, // Store preloaded image URLs here
  };

  componentDidMount() {
    console.log('Component has mounted');
    console.log(`scena corrente: ${this.state.currentSceneId}`)
    this.updateScene({});
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateScene(prevState);
  }
 

  updateScene = (prevState) => {
    if (prevState.currentSceneId === this.state.currentSceneId) return;

    const currentScene = this.getCurrentScene();
    if (currentScene) {
      const preloadedImage = this.state.preloadedImages[currentScene.sceneId];
      const imageUrl = preloadedImage ? preloadedImage : asset(currentScene.panorama).uri;
      Environment.setBackgroundImage(imageUrl);
      //Environment.setBackgroundImage(asset(currentScene.panorama));
    } else {
      console.error(`Scene with ID ${this.state.currentSceneId} not found.`);
    }

  };

  getCurrentScene = () => {
    return this.getSceneById(this.state.currentSceneId);
  };

  /*getSceneById = (sceneId) => {
    return this.props.scenes[sceneId];
  };
  */
  getSceneById = (sceneId) => {
    return this.props.scenes.find((scene) => scene.sceneId === sceneId);
  };

  handleHotSpotSceneClick = (sceneToGo) => {
    this.setState({ currentSceneId: sceneToGo.sceneId });
  };
  
  preloadImage = async (sceneId, panorama) => {
    try {
      const response = await fetch(asset(panorama).uri);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      console.log(`preload image`);

      // Store the preloaded image URL in the state
      this.setState((prevState) => ({
        preloadedImages: {
          ...prevState.preloadedImages,
          [sceneId]: imageUrl,
        },
      }));

      console.log(`Preloaded image for scene ${sceneId}: ${imageUrl}`);
    } catch (error) {
      console.error(`Failed to preload image for scene ${sceneId}:`, error);
    }
  };

  renderHotSpots = (hotSpots = []) => {
    return hotSpots.map((hotSpot, i) => {
      switch (hotSpot.type) {
        case 'scene': {
          console.log(`scena tipo: ${hotSpot.type}`);
          console.log(`sceneToGo ${this.getSceneById(hotSpot.sceneId)}`);
          const sceneToGo = this.getSceneById(hotSpot.sceneId);
          return (
            <HotSpotScene
              key={i.toString()}
              onClick={() => this.handleHotSpotSceneClick(sceneToGo)}
              text={hotSpot.text}
              left={hotSpot.left}
              top={hotSpot.top}
            />
          );
        }
        case 'info': {
          switch (hotSpot.tipo) {
                   
            case 'testo': {
              console.log("scena testo");
              return (
                <HotSpotTesto
                  key={i.toString()}
                  text={hotSpot.text}
                  left={hotSpot.left}
                  top={hotSpot.top}
                />
              )
            }
            case 'video': {
              console.log("scena video");
              return (
                <HotSpotVideo
                  key={i.toString()}
                  video={hotSpot.video}
                  left={hotSpot.left}
                  top={hotSpot.top}
                />
              )
            }
            case 'immagine': {
              console.log("scena immagine");
              
              return (
                <HotSpotImmagine
                  key={i.toString()}
                  immagine={hotSpot.immagine}
                  left={hotSpot.left}
                  top={hotSpot.top}
                />
              )
            }
                      
            default:
              break;
          }
        }
        
        default:
          return null;
      }
    });
  };

  render() {
    const currentScene = this.getCurrentScene();

    return (
      <View style={{ flex: 1 }}>
        {this.renderHotSpots(currentScene.hotSpots)}
      </View>
    );
  }
}