// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Gold', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Create a location two meters in front of the user, and one meter down
  const location = new Location([0, -1, -2]);


  // Render to this location
  r360.renderToLocation(
    r360.createRoot('CubeSat'),
    location,
  );


}

window.React360 = {init};
