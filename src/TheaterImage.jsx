'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const TheaterImage = React.createClass({
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

export default TheaterImage;

