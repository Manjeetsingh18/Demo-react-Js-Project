import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./store/create";
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
