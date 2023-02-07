import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogitem.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogsItem}>
        <NavLink to={path} className={dialogsItem => dialogsItem.isActive ? s.active : s.noactive}>{props.name}</NavLink>
    </div>
}

export default DialogItem;