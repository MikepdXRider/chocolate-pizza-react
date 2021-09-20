import React, { Component } from 'react'
import PComponent from '../util-components/PComponent.js'

export default class ImageSectionTitleAndDateComponent extends Component {
    render() {
        return (
            <div>
                <h1>Chocolate Pizza</h1>
                <PComponent
                messageData = 'POSTED ON 15 DEC 2013 / DESSERTS'
                />
            </div>
        )
    }
}
