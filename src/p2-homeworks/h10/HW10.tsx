import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from './bll/store';
import {loadingAC} from "./bll/loadingReducer";
import s from './../h8/HW8.module.css'
import s10 from './HW10.module.css'

type PreloaderPropsType = { image: string }

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 7000)
    };

    function Preloader(props: PreloaderPropsType) {
        return (
            <div >
                {isLoading
                    ? (
                        <div>
                            <img src={props.image} alt="lo"  className={s10.preloader}/>



                        </div>
                    ) : (
                        <div>
                            <SuperButton className={s.button} onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
        )
    }

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={s10.wrapper}>
                <Preloader image=' https://i.gifer.com/origin/73/73cdb30914f090d1f0d8c3fd1612aa97.gif'/>
                <Preloader image=' https://cs.pikabu.ru/post_img/2013/08/09/12/1376077569_1306251468.gif '/>
                <Preloader image=' https://mk0supsystic186fa3rj.kinstacdn.com/wp-content/uploads/2016/04/cat-loader.gif '/>


            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
