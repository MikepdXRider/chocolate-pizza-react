import React, { Component } from 'react'
import ImgComponent from '../util-components/ImgComponent.js'
import ImageSectionPrintComponent from './ImageSectionPrintComponent.js'
import ImageSectionTitleAndDateComponent from './ImageSectionTitleAndDateComponent.js'

export default class ImageSectionComponent extends Component {
    render() {
        return (
            <div>
                <ImageSectionTitleAndDateComponent />
                <ImageSectionPrintComponent />
                <ImgComponent
                sourceData = "choco-pizza.png"
                altData = "chocolate pizza" 
                />
            </div>
        )
    }
}
