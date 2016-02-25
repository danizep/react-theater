'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const TheaterSideContent = React.createClass({

    getInitialState() {
        return {
            item: null
        }
    },

    render() {
        return (
            <div>
                comments => {this.props.item}
            </div>
        );
    }
});

export default TheaterSideContent;

