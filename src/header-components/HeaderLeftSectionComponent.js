import React, { Component } from 'react'
import { ImgComponent, PComponent } from '../util-components/ImgComponent.js'

import '../App.css'

export default class HeaderLeftSectionComponent extends Component {
    render() {
        return (
            <section className='left-header-cont'>
                <ImgComponent
                sourceData = 'Logo.png'
                altData = 'Main-Logo'
                />
                <PComponent 
                messageData = 'Delicious' />
                <PComponent 
                messageData = 'The best food on the web' />
            </section>
        )
    }
}
