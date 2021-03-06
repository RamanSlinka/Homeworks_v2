import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import React, {useState} from "react";
import s from './Greeting.module.css'

export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        let user: UserType = {_id: v1(), name: name}
        setUsers([user, ...users])
    }

    return (
        <div className={s.page}>
            <hr/>
            homeworks 3
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}
            />

            <hr/>
        </div>
    )
}

export default HW3
