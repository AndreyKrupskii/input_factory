import React from 'react';
import ReactDom from 'react-dom/server';
import {	Provider	} from 'react-redux';

import configStore from './../../client/store/configStore';
import App from './../../client/components/App.component';
import getLogger from './log';

const log = getLogger(module);

// const	store	=	configStore();
// const preloadedState = store.getState();

// const componentHTML = ReactDom.renderToString(
// 	<Provider	store={store}>				
// 		<App/>		
// 	</Provider>
// );

// module.exports = {
// 	componentHTML: componentHTML,
// 	preloadedState: preloadedState
// }

module.exports = '';