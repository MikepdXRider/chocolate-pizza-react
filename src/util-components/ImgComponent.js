import React, { Component } from 'react';


export default class ImgComponent extends Component {
    render() {
        return (
            <>
                <img src={this.props.sourceData} alt={this.props.altData} />
            </>
        )
    }
}
