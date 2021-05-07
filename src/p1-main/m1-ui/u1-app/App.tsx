import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";
import Header from "../../../p2-homeworks/h5/Header";
import {HashRouter} from "react-router-dom";
import Routes from "../../../p2-homeworks/h5/Routes";

function App() {
    return (
        <div className={s.AppWrapper}>
            <HW5/>
        </div>
    )
}

export default App
