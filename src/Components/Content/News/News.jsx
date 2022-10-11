import React from "react";
import n from './News.module.css';
import NewsItem from "./NewsItem/NewsItem";



function News(props){
  let newsPage = props.state.news.map(n => <NewsItem id={n.id} data={n.data} news={n.news} />)
    return     <div className={n.content}>
      {newsPage}
  </div>
}

export default News;