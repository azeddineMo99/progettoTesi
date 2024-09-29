// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {Location, ReactInstance, Surface, Environment} from 'react-360-web';

let r360;
let myLoginSurface;
let mySceneSurface;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  
  myLoginSurface = new Surface(800, 500, Surface.SurfaceShape.Cylinder, );
  myLoginSurface.setAngle(0, 0);

  mySceneSurface = new Surface(4680, 2400, Surface.SurfaceShape.Cylinder,);

  
  r360.renderToSurface(
    r360.createRoot('App',{}),
    mySceneSurface,
  );


}


function changeToScene() {

  myLoginSurface.detach();
  mySceneSurface = new Surface(4680, 2400, Surface.SurfaceShape.Cylinder,);


  myLoginSurface.detach();
  r360.renderToSurface(
    r360.createRoot('App'),
    mySceneSurface
  );
  

 }
 window.React360 = {init, changeToScene};


