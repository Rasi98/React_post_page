import React from 'react';
import ReactDom from 'react-dom';
import {provider} from 'react-redux'; 
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
ReactDom.render(<App/>,document.getElementById('root'));