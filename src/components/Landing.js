import React, { Fragment } from 'react'
// import reactDom from 'react-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

import profilepic from '../assets/profile-picture.jpg'
import rainbowpic from '../assets/pexels-rainbow.jpeg'
import paintgif from '../assets/paint-gif.gif'

// import Header from './Header'

const Landing = () => {
    return (
        <Fragment>
            <main class="landing-container">
            <div class="wrapper">
                <section className='intro'>
                    <div className='introText'>
                        <h1>Express Yourself!</h1>
                        <p>Release your inhibitions and paint with all the colors of the rainbow. With this app you can paint free form lines on a blank canvas and adjust both the brush thickness and opacity. The faster your brush stroke the more opaque your lines will be!</p>
                        <Link to="/paint/" className="text-reset text-decoration-none"><Button variant="outline-primary" size="lg">Try It Out!</Button></Link>
                    </div>
                    <div class="introImg">
                        <Image src={rainbowpic} alt='rainbow picture' className='img-fluid'/>
                    </div>
                </section>

                <h4>Demo gif</h4>
                    <img src={paintgif} alt='Paint App Demo'/>
                <h3>Instructions</h3>
                    <ul class="list-group">
                        <li class="">Press and hold your mouse down to start drawing and lift up when finished with your free-form line.</li>
                        <li class="">Default brush opacity is set to 0.5 and can be changed using the slider to the right of the Brush Opacity option.</li>
                        <li class="">Brush width can be changed via the slider to the right of the Brush Width setting in the menu bar.</li>
                        <li class="">Brush color can be changed with the color picker by clicking on the Brush Color box in the menu bar.  Once clicked, you can enter a desired RGB, HSL, HEX value or choosea color from the provided picker. </li>
                    </ul>                
                <h3>Meet the Engineer:</h3>
                    <Card style={{ width: '18rem' }} className="engineers">
                    <Card.Img className="rounded-circle" variant="top" src={profilepic} alt="Photo of Michael Van Le"/>
                    <Card.Body>
                        <Card.Title>Michael Van Le</Card.Title>
                        <Card.Text>
                        An enthusiastic problem solver with astute attention to detail and a growth mindset.
                        </Card.Text>
                        <a href="https://www.linkedin.com/in/michaelvanle/" target="_blank">
                            <Button variant="primary">LinkedIn</Button>
                        </a>
                        <a href="https://github.com/miketocoding" target="_blank">
                            <Button variant="primary">GitHub</Button>
                        </a>
                        <a href="https://miketocoding.github.io/" target="_blank">
                            <Button variant="primary">Portfolio</Button>
                        </a>
                    </Card.Body>
                    </Card>
            </div>
        </main>
        </Fragment>
    )
}

export default Landing