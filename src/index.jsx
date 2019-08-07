import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// import {createStore} from 'redux';
import {createStore, applyMiddleware} from 'redux';

import App from './App';
import rootReducer from './store/configureStore';

import logger from 'redux-logger';

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
