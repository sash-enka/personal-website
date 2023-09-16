import * as React from 'react';

const Nav = () => {
// TODO: make this stick to top + have underlay colour as you scroll
    return (
        <div className='nav'>
            <div className="nav-links">
            <div className="nav-link-item">
            <a className="nav-link" href=''>
                Home
            </a>
            </div>

            <div className="nav-link-item">
            <a href="#about" className="nav-link">
                About
            </a>
            </div>

            <div className="nav-link-item">
            <a href="#experience" className="nav-link">
                Experience
            </a>
            </div>

            <div className="nav-link-item">
            <a href="#contact" className="nav-link">
                Contact
            </a>
            </div>
        </div>
        </div>
    )
}

export default Nav;