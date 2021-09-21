import React, { Component } from 'react'

export default class PComponent extends Component {
    render() {
        return (
            <p className={this.props.classData}>
                {this.props.textData}
            </p>
        )
    }
}
