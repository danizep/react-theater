'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Theater from '../src/Theater';
import TheaterImage from '../src/TheaterImage.jsx';
import TheaterSideContent from '../src/TheaterSideContent.jsx';

const Wrapper = React.createClass({
    getInitialState() {
        return {
            isOpen: false,
            items: this.props.items,
            currentItem: 0
        }
    },

    render() {
        return (
            <div>
                <Theater {...this.state} onClose={this._handleClose} onNext={this._handleNext} onPrev={this._handlePrev} preloadEnabled={false}>
                    <TheaterImage content={true}/>
                    <TheaterSideContent content={false}/>
                </Theater>
                {this.props.items.map((item, key) => {
                    return (
                        <img src={item}s
                             className="cat"
                             key={`cat${key}`}
                             onClick={this._handleOpen.bind(this, key)} />
                    )
                })}
            </div>
        );
    },

    _handleNext() {
        const currentItem = this.state.currentItem + 1 >= this.props.items.length ? 0 : this.state.currentItem + 1;

        this.setState({
            currentItem
        })
    },

    _handlePrev() {
        const currentItem = this.state.currentItem - 1 < 0 ? this.props.items.length - 1 : this.state.currentItem - 1;

        this.setState({
            currentItem
        })
    },

    _handleClose() {
        this.setState({ isOpen: false })
    },

    _handleOpen(currentItem) {
        this.setState({
            isOpen: true,
            currentItem
        })
    }
});

export default Wrapper;

