import React, { Component } from 'react';

export default class ImgComponent extends Component {
    render() {
        return (
            <>
                <img src={this.sourceData} alt={this.altData} />
            </>
        )
    }
}
