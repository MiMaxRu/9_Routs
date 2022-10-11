import React from "react";
import News from "./NewsItem.module.css"

function NewsItem(props) {
    return (
    <div className={News.newsline}>
        <span>{props.data} </span>
        <p> {props.news} </p>
    </div>
    )
}
export default NewsItem
