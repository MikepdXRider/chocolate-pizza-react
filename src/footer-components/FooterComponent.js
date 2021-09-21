import React, { Component } from 'react'
import ImgComponent from '../util-components/ImgComponent.js'
import PComponent from '../util-components/PComponent.js'
import ButtonComponent from './ButtonComponent.js'

export default class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <hr />
                <hr />
                <hr />
                <ImgComponent 
                sourceData = 'van-pic.png'
                altData = 'van pic'
                />
                <h3>Vanessa Stevenson</h3>
                <PComponent
                textData = "Food Enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am."
                />
                <ButtonComponent />
                <div></div>
                <ImgComponent 
                sourceData = 'small-logo.png'
                altData = 'small logo'
                />
                <div></div>
                <PComponent
                textData = 'Delicious 2013 ~ All Rights Reserved.'
                />
                <PComponent
                textData = 'Proudly published with Ghost.'
                />
            </footer>
        )
    }
}
