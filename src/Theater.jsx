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
            onClose: null,
            preloadEnabled: true,
            disableScroll: true
        }
    },

    componentWillUpdate(nextProps) {
        if (!this.props.isOpen && nextProps.isOpen) {
            this._handleToggleDisableScroll();
            window.addEventListener('keyup', this._handleKeyPress);
        }

        if(this.props.isOpen && !nextProps.isOpen) {
            this._handleToggleDisableScroll();
            window.removeEventListener('keyup', this._handleKeyPress);
        }
    },

    render() {
        if (!this.props.isOpen) return null;
        let {content, sideContent} = this._splitChildren();

        console.log(content);
        console.log(sideContent);

        return (
            <div className="theater-wrapper">
                {this._getPreloadHtml(content)}
                <div className="theater-backdrop" onClick={this._handleClose}>
                    <div className="theater-content-wrapper" onClick={this._handleStopPropagation} >
                        <a className="theater-close-button" role="button" onClick={this._handleClose}>&times;</a>
                        <div className="theater-content">
                            {this._getPrevButtonHtml()}
                            {this._getNextButtonHtml()}
                            {React.cloneElement(content, {item: this.props.items[this.props.currentItem]})}
                        </div>
                        <div className="theater-side-content">
                            {React.cloneElement(sideContent, {item: this.props.currentItem})}
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    _handleNext() {
        this._runCallback('onNext', {});
    },

    _handlePrev() {
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

    _getPreloadHtml(content) {
        if (this.props.preloadEnabled) {
            return (
                <div className="theater-preload">
                    {React.cloneElement(content, {item: this.props.items[this.props.currentItem - 1]})}
                    {React.cloneElement(content, {item: this.props.items[this.props.currentItem + 1]})}
                </div>
            )
        }
    },

    _handleStopPropagation(e) {
        e.stopPropagation()
    },

    _handleKeyPress(event) {
        if(!this.props.isOpen) return false;

        switch(event.keyCode) {
            case 39:
                //next
                this._handleNext();
                break;
            case 37:
                //prev
                this._handlePrev();
                break;
            case 27:
                //close
                this._handleClose();
                break;
        }
    },

    _handleToggleDisableScroll() {
        const body = document.querySelector('body');

        if (body.classList.contains('theater--opened')) {
            body.classList.remove('theater--opened');
        } else {
            body.classList.add('theater--opened');
        }
    },

    _splitChildren() {
        let children = {};

        React.Children.forEach(this.props.children, function (child) {
            if (typeof child !== 'string' ) {
                if (child.props.content) {
                    children.content = child;
                } else {
                    children.sideContent = child;
                }
            }

        }, this);

        return children;
    }
});

export default Theater;

