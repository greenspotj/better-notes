import React, { Component } from 'react'

import InfoPanel from './InfoPanel'
import HomeNavBtns from './HomeNavBtns'

import './homePage.css'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <InfoPanel />
                <HomeNavBtns />
            </div>
        )
    }
}

export default HomePage