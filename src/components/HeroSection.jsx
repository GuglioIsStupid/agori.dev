import React from 'react'
import { Button } from './Button'

import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>AGORI Studios</h1>
            {/* <p>What are you waiting for?</p> */}
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Check out our work
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
