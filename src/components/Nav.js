import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <ul>
                    <li ><NavLink to="/sun">Sun</NavLink></li>
                    <li><NavLink to="/stars">Stars</NavLink></li>
                    <li><NavLink to="/moon">Moon</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
