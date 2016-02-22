'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Theater = _react2.default.createClass({
    displayName: 'Theater',
    getInitialState: function getInitialState() {
        return {};
    },
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    componentWillMount: function componentWillMount() {},
    componentWillUnmount: function componentWillUnmount() {},
    componentDidMount: function componentDidMount() {},
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'theater-wrapper' },
            _react2.default.createElement(
                'b',
                null,
                'theater - available soon'
            )
        );
    }
});

exports.default = Theater;
