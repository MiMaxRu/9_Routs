import React from "react";
import Ava from "./Ava/Ava";
import h from './Home.module.css'
import Info from "./Info/Info";

export default function Home(props) {
  let accountItem = props.state.accountData.map(d => <Info id={d.id} f={d.f} i={d.i} o={d.o} age={d.age}
    ageData={d.ageData} otherData={d.otherData} />);

  return <div className={h.content}>
    {props.state.accountData.map(d =><Ava f={d.f} i={d.i}/>)}

    <div className={h.accountItem}>
      {accountItem}
    </div>

  </div>
}
