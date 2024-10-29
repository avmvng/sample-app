import React from 'react';
import './App.css';

export default function MovingLogo() {
    return (
        <div className="logo-container">
            <div className="moving-logo">
                {Array.from({ length: 20 }).map((_, j) => (
                    <h1 key={j} className="logo">phoneatsfirst</h1>
                ))}
            </div>
        </div>
    );
}
