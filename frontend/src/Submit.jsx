import React from 'react'
import './App.css'
import { Button } from './Button'
import "./Button.css"
import { useState, useEffect } from 'react'
import "./Submit.css"

export default function Submit () {
    return (
        <div className="submit">
            <input type="text" placeholder="Enter your name" />
            <Button type="default" size="lg">submit</Button>
        </div>
    );
}