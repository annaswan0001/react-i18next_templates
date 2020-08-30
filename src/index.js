import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { useTranslation } from "react-i18next"
import axios from 'axios'
import setLang from './axiosSettings'

let lang 

if(localStorage.getItem('i18nextLng')) {
  lang = localStorage.getItem('i18nextLng')
  setLang( lang)
} 



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
