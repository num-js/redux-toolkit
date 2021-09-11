import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = {
    name: 'Numan',
    profession: 'SD1',
    company: 'W42',
    status: 'Single'
}

const Store = configureStore({
    reducer: (state) => {
        return state;
    },
    preloadedState: initialState
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();