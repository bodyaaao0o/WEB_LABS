import React from 'react';
import { Link } from "react-router-dom";
import "../style2.css";


export default function Header() {
    return (
        <div className="header">
            <img className='logo' src='/images/logo.png' alt="Logo" />
            <div className='nav-header'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/catalog'>Catalog</Link>
                        </li>
                        <li>
                            <Link to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
