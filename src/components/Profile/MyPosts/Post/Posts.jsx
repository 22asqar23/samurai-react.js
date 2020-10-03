import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://www.hdcarwallpapers.com/walls/2015_vorsteiner_bmw_m6_gts_v-wide.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}
export default Posts;