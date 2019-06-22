import React, { Component } from 'react'


export class NotFound extends Component {
    render() {
        return (
            <div className='not-found'>
                <h1>404</h1>
                <p>You enter a wrong URL or your search did not return any results. Please try again.</p>   
                <span aria-label="LOUDLY-CRYING-FACE" role="img">&#128557;</span>       
            </div>
        )
    }
}

export default NotFound





