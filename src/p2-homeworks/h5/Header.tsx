import React, {useState} from 'react'
import s from './HW5.module.css'
import {NavLink} from 'react-router-dom'
import image from './image.png'


function Header() {

  /*  let [NavBar, setNavBar] = useState(false)
    return (
        <div className={s.nav}>
            <img src={image} alt="main" onClick={() => {
                setNavBar(!NavBar)
            }}/>
            <div>
                {NavBar && <NavBarBody/>}
            </div>
        </div>
    )
}

function NavBarBody() {*/
    return (
        <div className={s.header}>
            <NavLink to='/start-page' className={s.link} activeClassName={s.active}>startPage </NavLink>
            <NavLink to='pre-junior' className={s.link} activeClassName={s.active}>PreJunior </NavLink>
            <NavLink to='junior' className={s.link} activeClassName={s.active}>Junior </NavLink>
            <NavLink to='junior+' className={s.link} activeClassName={s.active}>Junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
