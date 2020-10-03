import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/man-wearing-blue-shirt-illustration-png-clip-art.png";
import {NavLink} from "react-router-dom";

let User = ({user,followingInProgress,unfollow,follow}) => {
    return (
        <div>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                     </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id);
                                              }}>UnFollow</button>

                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id);
                                              }}>Follow</button>}
                                    </div>
                                    </span>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    )


}
export default User;