import React from "react";
import info from './Info.module.css'

export default function Info(props) {
    
    return <div className={info.content}>
        <h1 className={info.h}>O СЕБЕ</h1>
        <ul className={info.u}>
            <li>ФИО: {props.f} {props.i} {props.o}</li>
            <li>Возраст: {props.age} лет</li>
            <li>День рождения: {props.ageData}</li>
            <li>{props.otherData}</li>
        </ul>
    </div>
}
