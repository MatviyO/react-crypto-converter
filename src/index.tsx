import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import {Provider} from "mobx-react";
import stores from "./stores";


ReactDOM.render(
  <React.StrictMode>
      <Provider {...stores}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

