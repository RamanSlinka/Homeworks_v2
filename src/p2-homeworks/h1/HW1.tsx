import React from 'react'
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";
import s from './Message.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text ',
    time: '22:00',
}
const messageDataAlternative = {
    avatar: 'https://cdn.roundicons.com/wp-content/uploads/2017/08/Artboard-18-copy-17-hand-drawn-avatar-Icon.png',
    name: 'Some SuperName',
    message: 'some text, but more then before',
    time: '22:11',
}


function HW1() {
    return (
        <div className={s.page}>
           homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <AlternativeMessage
                avatar={messageDataAlternative.avatar}
                name={messageDataAlternative.name}
                message={messageDataAlternative.message}
                time={messageDataAlternative.time}
            />

        </div>
    )
}

export default HW1
