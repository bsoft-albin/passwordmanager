import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import reduxStore from './redux/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Provider store={reduxStore} >
        <App />
      </Provider>
    </BrowserRouter>
)
