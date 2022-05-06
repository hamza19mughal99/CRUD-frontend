import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from './App';

axios.defaults.baseURL = 'http://localhost:4000/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );