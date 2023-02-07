import React from 'react';
import s from './Messageitem.module.css';



const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default MessageItem;