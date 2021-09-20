import React, { Component } from 'react'

export default class PComponent extends Component {
    render() {
        return (
            <p>
                {this.props.messageData}
            </p>
        )
    }
}
