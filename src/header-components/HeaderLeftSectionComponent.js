import React, { Component } from 'react'
import ImgComponent from '../util-components/ImgComponent.js'
import PComponent from '../util-components/PComponent.js'

export default class HeaderLeftSectionComponent extends Component {
    render() {
        return (
            <section className='left-header-cont'>
                <ImgComponent
                sourceData = 'logo.png'
                altData = 'Main-Logo'
                />
                <PComponent 
                messageData = 'Delicious'
                />
                <PComponent 
                messageData = 'The best food on the web'
                />
            </section>
        )
    }
}
