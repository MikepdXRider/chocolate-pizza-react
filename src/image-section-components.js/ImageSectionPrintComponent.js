import React, { Component } from 'react'
import ImgComponent from '../util-components/ImgComponent.js'
import PComponent from '../util-components/PComponent.js'

export default class ImageSectionPrintComponent extends Component {
    render() {
        return (
            <div>
                <ImgComponent
                sourceData = 'print-icon.png'
                altData = 'print-icon'
                />
                <PComponent
                messageData = 'PRINT'
                />
            </div>
        )
    }
}
