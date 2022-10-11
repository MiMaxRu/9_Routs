import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import p from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props)=>{

    return (
    <div className={p.content}>


    <MyPosts posts = {props.state.posts} addPost={props.addPost}/>
    </div>
    )
}
export default Profile;