import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='data:image/png;base64,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'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;