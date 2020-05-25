'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Cart'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Your cart is empty'
    )
  );
};

exports.default = App;