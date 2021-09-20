import React, { Component } from 'react'
import { imgArr } from '../img-data.js'
import ImgComponent from '../util-components/ImgComponent.js'

export default class ButtonListComponent extends Component {
    render() {
        return (
            <>
                {
                    imgArr.map((img) => {
                        return (
                            <ImgComponent
                            sourceData = {img.src}
                            altData = {img.alt}
                            />
                        )
                    })
                }
            </>
        )
    }
}
