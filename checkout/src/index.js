import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderCheckout = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

window.unmountCheckout = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
