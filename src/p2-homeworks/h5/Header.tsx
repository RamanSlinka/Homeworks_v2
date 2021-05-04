import React from 'react'
import s from './HW5.module.css'
import {NavLink} from 'react-router-dom'
import image from './image.png'


function Header() {

    return (
        <div className={s.nav}>
            <img src={image} alt="main"/>
            <div className={s.navContainer}>
                <div className={s.item}>
                    <NavLink to='pre-junior'>PreJunior </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='junior'>PreJunior </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='junior+'>PreJunior </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
