import React from "react";
import facebook from '../assets/facebook-logo.png'
import profile from '../assets/profile.png'
import './header.css' 

export function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={facebook}></img>
            </div>
            <div className='profile'>
                <span>
                    Meu Perfil
                </span>
                <img src={profile}></img>
            </div>
        </div>
    )
}