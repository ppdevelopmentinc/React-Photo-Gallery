import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <span aria-label="THINKING-FACE" role="img">&#129300;</span>
                <p>Loading...</p>
            </div>
        )
    }
}
