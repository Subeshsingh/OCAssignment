import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import expertReducer from './store/reducer/expert';
import moduleReducer from './store/reducer/module'; 
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;


const rootReducer= combineReducers({
  experts: expertReducer,
  modules: moduleReducer
});

const store= createStore( rootReducer, composeEnhancers(
       applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
         <App />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
