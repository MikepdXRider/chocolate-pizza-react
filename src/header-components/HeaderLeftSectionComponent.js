import React, { Component } from 'react'
import H1Component from '../util-components/H1Component.js'
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
                <H1Component 
                textData = 'Delicious'
                />
                <PComponent 
                textData = 'The best food on the web'
                />
            </section>
        )
    }
}
