import React from 'react';
import './config/StatusBarConfig';
import { Provider } from 'react-redux';

import './config/DevToolsConfig';
import './config/ReactotronConfig';

import store from './store';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
