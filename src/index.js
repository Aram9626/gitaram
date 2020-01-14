import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';

const store=createStore(reducer)
const app=
<Provider store={store}>
<BrowserRouter>
    <App/>
</BrowserRouter>
</Provider>
;
ReactDOM.render(
  app,
  document.getElementById('root')
);
