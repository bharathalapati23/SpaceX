import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import setUserRole from './UserRoleReducer' 
import actionType from './UserRoleAction'

let store = createStore(setUserRole)

store.subscribe(()=> {console.log(store.getState())})
 
ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));