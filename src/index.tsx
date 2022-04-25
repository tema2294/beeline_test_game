import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GamePage from '../src/pages/gamePage/gamePage'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <GamePage />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

