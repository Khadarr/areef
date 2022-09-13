import React from 'react'

//import {NavLink} from 'react-router-dom'

import './header.css'

const Header=()=>{
    return(
        <nav className='nav-container'>
            <div className='nav-content'>
                <div className='heading-container'>
                    <img src='https://i.postimg.cc/5N2TQmcT/Whats-App-Image-2022-03-31-at-10-39-02-PM.jpg'
                    alt = 'basha'
                    className='logo'/>
                </div>
                <div className='contianer'></div>
                <ul className='nav-menu'>
                    <li className='nav-link'>
                    <button type='button' className='link'>
                        Home
                        </button>
                    </li>
                    <li className='nav-link'>
                    <button type='button' className='link'>
                        About Us
                        </button>
                    </li>
                    <li className='nav-link'>
                    <button type='button' className='link'>
                        Our Services
                        </button>
                    </li>
                    <li className='nav-link'>
                    <button type='button' className='link'>
                        Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
    }

 export default Header