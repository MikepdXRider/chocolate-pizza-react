import React, { Component } from 'react'
import H1Component from '../util-components/H1Component.js'
import PComponent from '../util-components/PComponent.js'


export default class ImageSectionTitleAndDateComponent extends Component {
    render() {
        return (
            <div>
                <H1Component
                textData = 'Chocolate Pizza'
                 />
                <PComponent
                textData = 'POSTED ON 15 DEC 2013 / DESSERTS'
                />
            </div>
        )
    }
}
