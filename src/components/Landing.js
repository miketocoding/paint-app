import React, { Fragment } from 'react'
// import reactDom from 'react-dom'

// import Header from './Header'

const Landing = () => {
    return (
        <Fragment>
            <div class="container">
                <h1>Paint Your Soul</h1>
                <h4>Description of your application</h4>
                    <p>Web application that allows users to paint with free-form lines</p>
                <h4>Explain your project's features</h4>
                <ul class="list-group">
                    <li class="list-group-item">User can paint free form lines on a blank canvas</li>
                    <li class="list-group-item">User can change the brush width and opacity</li>
                    <li class="list-group-item">User can change the brush color</li>
                    {/* <li class="list-group-item">Porta ac consectetur ac</li> */}
                    {/* <li class="list-group-item">Vestibulum at eros</li> */}
                </ul>                
                <h4>Include a short demo video</h4>
                    <p></p>
                <h4>Tutorial on how to use or interact with your application</h4>
                    <ul class="list-group">
                        <li class="list-group-item">Press and hold your mouse down to start drawing and lift up when finished with your free-form line.</li>
                        <li class="list-group-item">Default brush opacity is set to 0.5 and can be changed using the slider to the right of the Brush Opacity option.</li>
                        <li class="list-group-item">Default brush width is set to </li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>                
                <h4>Obvious and clear button to link to your live application</h4>
                    <p></p>
                <h4>"Meet the engineers" that shows a photo of you. Links to your linkedin, portfolio, github</h4>
                    <p></p>
            </div>
        </Fragment>
    )
}

export default Landing