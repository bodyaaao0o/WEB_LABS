import React from 'react';
import "../style2.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-text-1'>
                    <h2>Bookdux</h2>
                    <p>Blablabla</p>
                </div>
                <div className='logo-footer'>
                    <img className='logo-f' src='./images/logo.png' alt='Bookdux logo' />
                </div>
            </div>
            <div className='footer-text-2'>
                © {currentYear} Bookdux, All blablabla.
            </div>
        </footer>
    );
}
