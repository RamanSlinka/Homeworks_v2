import React from 'react'
import image from './404-error-page.jpg'
import s from './../HW5.module.css'


function Error404() {

    return (
        <div >
            <img src={image} className={s.error} alt="Error-page "/>
        </div>
    )
}



function AlternativeError () {
    return (
        <div>
            <div>404</div>
            <div>Page not found!</div>
            <div></div>
        </div>
    )
}

export default Error404