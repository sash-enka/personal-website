import React, {useState} from 'react';

const Home = () => {

    return (
    <div className='home'>
        <div className='title'>
            <text>Hi! My name is Sashenka. I'm a final year Software Engineering and Business Analytics student at Monash University.</text>
        </div>

        <div className="home-links">
            <div className="home-link-item">
            <a className="link" href='https://www.linkedin.com/in/sashenka-justin' target='_blank' rel="noreferrer">
                LinkedIn
            </a>
            </div>

            <div className="home-link-item">
            <a className="link" href="mailto:sashenkajustin@gmail.com">
                Email
            </a>
            </div>

            <div className="home-link-item">
            <a className="link" href='https://github.com/sash-enka' target='_blank' rel="noreferrer">
                GitHub
            </a>
            </div>
        </div>
    </div>
    );
}

export default Home;