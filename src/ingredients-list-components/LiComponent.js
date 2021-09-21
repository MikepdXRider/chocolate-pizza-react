import React, { Component } from 'react'

export default class LiComponent extends Component {
    render() {
        return (
            <li>
                {this.props.quantity} {this.props.ingredient}
            </li>
        )
    }
}
