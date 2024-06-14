import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const _STYLES = ['btn--primary', 'btn--outline']
const _SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = _STYLES.includes(buttonStyle) ? buttonStyle : _STYLES[0]
    const checkButtonSize = _SIZES.includes(buttonSize) ? buttonSize : _SIZES[0]

    return (
        <Link to="/" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}