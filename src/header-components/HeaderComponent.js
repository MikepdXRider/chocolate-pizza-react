import React, { Component } from 'react'
import { HeaderLeftSectionComponent } from './HeaderLeftSectionComponent.js'

export default class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <HeaderLeftSectionComponent />
            </header>
        )
    }
}
