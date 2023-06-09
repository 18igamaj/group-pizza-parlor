import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

//Reducers
//if action type matches string set_pizza then save data from the server 
//on to our action.payload which will render to our dom
const pizza = (state= [] , action) => {
    console.log('action.payload is', action.payload)
    if(action.type === 'SET_PIZZA') {
      return action.payload  
    }
    return state 
}
const orders = (state= [], action) => {
    console.log('action payload for orders is',action.payload)
    if(action.type === 'SET_ADMIN_ORDER'){
        return action.payload
    }
    return state;
}
const cart = (state =[], action) => {

    return state;
}
 
//Store
const reduxStore = createStore (
    combineReducers ({
      pizza,
      cart ,
      orders
    }),
     applyMiddleware (logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store ={reduxStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
