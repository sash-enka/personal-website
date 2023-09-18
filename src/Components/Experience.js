import React, {useState} from 'react';
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';

const Experience = () => {

    return (
        <div className='experience-contact-footer'>
    <div className='experience-contact' id='experience'>
        {/* EXPERIENCE */}
        <div className='experience'>
        <div className='heading'>
            <text className='heading-text'>Experience</text>
        </div>
        <div className='experience-item'>
            <text className='experience-time-range'>NOV 2022 - FEB 2023 | Melbourne</text> 
            <text className='experience-item-text'>Software Engineering Intern at <a href='https://www.woodside.com/' target='_blank' rel="noreferrer">Woodside Energy</a></text>
        </div>

        {/* <MoreVertRoundedIcon className='experience-divider-icon' sx={{fontSize:'3rem'}}/> */}

        <div className='experience-item'>
            <text className='experience-time-range'>JAN - JUN 2022 | Perth</text> 
            <text className='experience-item-text'>Frontend Developer at <a href='https://www.deloittedigital.com.au/' target='_blank' rel="noreferrer">Deloitte Digital</a></text>
        </div>

        {/* <MoreVertRoundedIcon className='experience-divider-icon' sx={{fontSize:'3rem'}}/> */}

        <div className='experience-item'>
            <text className='experience-time-range'>SEP 2021 - NOV 2022 | Melbourne</text> 
            <text className='experience-item-text'>Sponsorship Director at <a href='https://www.ccamonash.com.au/' target='_blank' rel="noreferrer">CCA (Computing and Commerce Association, Monash Uni)</a></text>
        </div>
        </div>

        {/* TODO: make contact and footer into separate components, and share background */}
        {/* CONTACT */}
        <div className='contact' id='contact'>
            <div className='heading'>
                <text className='heading-text'>Contact Me</text>
            </div>
            <div className='contact-item'>
                <text className='contact-item-text'>
                    via <a href='https://www.linkedin.com/in/sashenka-justin' target='_blank' rel="noreferrer">
                        LinkedIn
                    </a> or <a className="link" href="mailto:sashenkajustin@gmail.com">
                        Email
                    </a>
                </text>
                <WavingHandRoundedIcon className='contact-item-icon' sx={{fontSize: '3rem'}}/>
            </div>
        
        </div>
    </div>
        {/* FOOTER */}
        <div className='footer'>
        <div className='footer-item'>
            <text className='footer-item-text'>&copy; Sashenka Justin 2023</text>
        </div>
    </div>
    </div>
    );
}

export default Experience;