import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import MovingLogo from './MovingLogo';

const Nav = () => {

    return (
        <div className>
            <div className="navigation">
                <MovingLogo />
                <ul>
                    <li><Link to="/">eats</Link></li>
                    <li><Link to="/submit">submit</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/help">help</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;