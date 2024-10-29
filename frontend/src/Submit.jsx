import React from 'react'
import './App.css'
import { Button } from './Button'
import "./Button.css"
import { useState, useEffect } from 'react'

export default function Submit () {
    return (
        <div className="submit">
            <Button type="default" size="lg">submit</Button>
        </div>
    );
}