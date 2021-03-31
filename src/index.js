import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from "./components/TodoContainer"
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from "react-router-dom"

// stylesheet
import "./App.css";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
