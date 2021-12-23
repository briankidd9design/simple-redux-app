import React from 'react';
import ReactDOM from 'react-dom';
//Provider is a component and by convention we name component names with capitals
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//above outside dependencies, below custom components or own code
import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    //the store is going to be the result of createStore and passing in our reducers
    //With react-redux library, We usually pass the store to the Provider an don't mess with it directly. The Provider takes care of everything from there
    <Provider store={createStore(reducers)}>
         <App />
    </Provider>,
    document.querySelector('#root')
)