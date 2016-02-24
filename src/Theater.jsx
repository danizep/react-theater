'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

const Theater = React.createClass({
    getInitialState() {
        return {
        }
    },

    getDefaultProps() {
        return {
            isOpen: false,
            onNext: null,
            onPrev: null,
            onOpen: null,
            onClose: null
        }
    },

    componentWillMount() {
    },

    componentWillUnmount() {
    },

    componentDidMount() {
    },

    render() {
        if (!this.props.isOpen) return null;

        return (
            <div className="theater-wrapper">
                <div className="theater-backdrop" onClick={this._handleClose}>

                    <div className="theater-content-wrapper" onClick={this._handleStopPropagation} >
                        <a className="theater-close-button" role="button" onClick={this._handleClose}>&times;</a>
                        <div className="theater-content">
                            {this._getPrevButtonHtml()}
                            {this._getNextButtonHtml()}
                            {React.cloneElement(this.props.children, {item: this.props.items[this.props.currentItem]})}
                        </div>
                        <div className="theater-side-content">
                            ...
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    _handleNext(e) {
        e.stopPropagation();
        this._runCallback('onNext', {});
    },

    _handlePrev(e) {
        e.stopPropagation();
        this._runCallback('onPrev', {});
    },

    _handleClose() {
        this._runCallback('onClose', {});
    },

    _handleOpen() {
        this._runCallback('onOpen', {});
    },

    _runCallback(callbackName, params) {
        console.log(callbackName);
        const callback = this.props[callbackName];

        if ( callback !== null && typeof callback === 'function') {
            callback(params)
        }
    },

    _getPrevButtonHtml() {
        return (
            <a className="theater-nav-button theater-nav-button--prev" role="button" onClick={this._handlePrev}>
                <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                    <polyline fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
                </svg>
            </a>
        );
    },

    _getNextButtonHtml() {
        return (
            <a className="theater-nav-button theater-nav-button--next" role="button" onClick={this._handleNext}>
                <svg width="60px" height="80px" viewBox="0 0 50 80" xmlSpace="preserve">
                    <polyline fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
                </svg>
            </a>
        );
    },

    _handleStopPropagation(e) {
        e.stopPropagation();
    }
});

export default Theater;

