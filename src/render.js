import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';

import {addPost} from './Redux/stateDate';


export let renderEntireTree = (stateData)=>{
  const root = ReactDom.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App stateData={stateData} addPost={addPost}/>
    </React.StrictMode>
  );
}