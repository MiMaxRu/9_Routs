import React from 'react';
import pos from './Post.module.css';

const Post = (props)=>{
  return (
      <div className={pos.item}>
        <img src = 'https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-57.jpg'></img>
        <span>{props.message}</span>
        <div><button onClick={like}></button></div>
  </div>
      )
}

function like(){
  alert("Вы поставили лайк!");
}

export default Post;