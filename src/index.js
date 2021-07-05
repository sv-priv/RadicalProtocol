import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './fonts.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from "./state/store"

<style>
    
</style>

ReactDOM.render(
    <Provider store={store}><App></App></Provider>,
    document.querySelector('#root')
);



