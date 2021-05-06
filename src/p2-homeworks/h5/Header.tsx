import React, {useState} from 'react'
import s from './HW5.module.css'
import {NavLink} from 'react-router-dom'
import image from './image.png'


function Header() {
    let [NavBar, setNavBar] = useState(false)
    return (
        <div className={s.nav}>
            <img src={image} alt="main" onClick={() => {
                setNavBar(!NavBar)   }}/>
            <div >
                {NavBar && <NavBarBody/>}
            </div>
        </div>
    )
}

function NavBarBody() {
    return (
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
    )
}

export default Header
