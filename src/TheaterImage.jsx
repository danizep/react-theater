'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const Wrapper = React.createClass({
    getInitialState() {
        return {
            item: null
        }
    },

    render() {
        return (
            <img src={this.props.item} />
        );
    }
});

export default Wrapper;

