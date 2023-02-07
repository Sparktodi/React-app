import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://storage.yandexcloud.net/incrussia-prod/wp-content/uploads/2022/06/Oblozhka-uzkogo-posta-copy-4-768x508.jpg' />
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>
                    {props.login} -
                    <button onClick={props.logout}>Logout</button>
                </div>
                : <NavLink to='/login' >Login</NavLink>}
        </div>
    </header>
}

export default Header;