import React, {useState} from 'react';
import BakeryDiningRoundedIcon from '@mui/icons-material/BakeryDiningRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';

const About = () => {

    return (
    <div className='about' id='about'>
        <div className='about-container'>
        <div className='heading'>
            <text className='heading-text'>About Me</text>
        </div>
        
        <div className='about-item'>
            <DeveloperModeRoundedIcon className='about-item-icon' sx={{fontSize: '4rem'}}/>  
            <text className='about-item-text'>
                I enjoy web and mobile development, and data analytics. Currently also learning some
                machine learning basics at university.
            </text>
        </div>

        <div className='about-item'>
            <AutoStoriesRoundedIcon className='about-item-icon' sx={{fontSize: '4rem'}}/>
            <text className='about-item-text'>I like to read. See what I'm currently reading <a href='https://www.goodreads.com/user/show/163070401-sashenka-j' target='_blank' rel="noreferrer" className='link'>here</a>.</text>
        </div>

        <div className='about-item'>
            <BakeryDiningRoundedIcon className='about-item-icon' sx={{fontSize: '4rem'}}/>
            <text className='about-item-text'>I also like to bake. I (occationally) share what I bake on my <a href='https://www.instagram.com/snaccs_withsash' target='_blank' rel="noreferrer" className='link'> Instagram</a>.</text>
        </div>
        </div>

    </div>
    );
}

export default About;