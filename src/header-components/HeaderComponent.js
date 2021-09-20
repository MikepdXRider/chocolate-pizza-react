import React, { Component } from 'react'
import HeaderLeftSectionComponent from './HeaderLeftSectionComponent.js'
import HeaderRightSectionComponent from './HeaderRightSectionComponent.js'

export default class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <HeaderLeftSectionComponent />
                <HeaderRightSectionComponent />
                <hr /> 
                <hr />
                <hr />
            </header>
        )
    }
}
