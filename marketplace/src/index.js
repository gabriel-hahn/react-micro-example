import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderMarketplace = (containerId, history) => {
  ReactDOM.render(<App history={history} />, document.getElementById(containerId));
};

window.unmountMarketplace = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
