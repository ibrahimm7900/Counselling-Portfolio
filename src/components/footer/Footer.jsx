import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="font_title">Sadia</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer_link">Testimonials</a>
                </li>
            </ul>

            <div className="footer_social">

        <a href="https://www.instagram.com/" target='_blank' className='footer_social-link'>
        <i class="uil uil-instagram"></i>
        </a>

        <a href="https://www.facebook.com/" target='_blank' className='footer_social-link'>
        <i class="uil uil-facebook"></i>
        </a>

        <a href="https://www.whatsapp.com/" target='_blank' className='footer_social-link'>
        <i class="uil uil-whatsapp-alt"></i> 
        </a>
        </div>

        <span className="footer_copy">&#169; certfied</span>
        </div>
    </footer>
  )
}

export default Footer
