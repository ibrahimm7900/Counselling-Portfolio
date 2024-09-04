import React, { useState } from 'react'
import './header.css';



const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("show-header");
        else header.classList.remove("show-header");
    })
    
 const[Toggle, showMenu] = useState(false);
 const [activeNav, setActiveNav ] = useState('#home')
  return (
    <header className='header'>
        <nav className='nav container'>
           <a href='index.html' className='nav_logo'>Sadia</a>
            <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
                <ul className='nav_list grid'>

                    <li className='nav_item'>
                        <a  onClick={() => setActiveNav ('#home')} 
                            href="#home" 
                            className={activeNav === '#home' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-estate nav_icon'></i>
                            Home
                        </a>
                    </li>

                    <li className='nav_item'>
                    <a  onClick={() => setActiveNav ('#about')} 
                            href="#about" 
                            className={activeNav === '#about' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-user nav_icon'></i>
                            About
                        </a>
                    </li>

                    <li className='nav_item'>
                    <a  onClick={() => setActiveNav ('#services')} 
                            href="#services" 
                            className={activeNav === '#services' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-file-alt nav_icon'></i>
                            Services
                        </a>
                    </li>

                    <li className='nav_item'>
                    <a  onClick={() => setActiveNav ('#qualification')} 
                            href="#qualification" 
                            className={activeNav === '#qualification' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-briefcase-alt nav_icon'></i>
                            Qualification
                        </a>
                    </li>

                    <li className='nav_item'>
                    <a  onClick={() => setActiveNav ('#testimony')} 
                            href="#testimony" 
                            className={activeNav === '#testimony' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-scenery nav_icon'></i>
                            Testimony
                        </a>
                    </li>

                    <li className='nav_item'>
                    <a  onClick={() => setActiveNav ('#Gallery')} 
                            href="#Gallery" 
                            className={activeNav === '#Gallery' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-message nav_icon'></i>
                            Gallery
                        </a>
                    </li>

                    <li className='nav_item'>
                    <a  onClick={() => setActiveNav ('#contact')} 
                            href="#contact" 
                            className={activeNav === '#contact' ? 
                            'nav_link active-link ' : 'nav_link'
                        }>
                            <i className='uil uil-message nav_icon'></i>
                            Contact
                        </a>
                    </li>
                    
                </ul>

                

                    <i className='uil uil-times nav_close' onClick={() => showMenu (!Toggle)}></i>
            </div>
            <div className="nav_toggle" onClick={() => showMenu (!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
