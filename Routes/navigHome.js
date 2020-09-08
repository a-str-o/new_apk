import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from '../login';
import ViewApp from '../src/ViewApp';
import chatt from '../src/chat/chatt';

const Route = () => {
	return (
	  <Router>
		<Scene key="root">
		  <Scene
			key="home"
			initial
			component={ViewApp}
			title="home"
			hideNavBar={true}
		  />
		  <Scene 
            key="chatt"
            component={chatt}
            title="chatt"
      />
		</Scene>
	  </Router>
	);
  }
export default Route;