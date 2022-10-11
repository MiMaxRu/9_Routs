import React from "react";
import Avaj from '../../../../img/Ava.jpg';
import ava from './Ava.module.css'
import Button from 'react-bootstrap/Button';

function Ava(props) {
  return <div className={ava.content}>



    <p className={ava.name}>{props.f} {props.i}</p>

    <div className={ava.brd}>

      <img src={Avaj} ></img>
      <div className={ava.btn}><div className="btn">
        <button>Фотографии</button>

        <button>Истории</button>
        {/*   <Button onClick={like}>
          Button
</Button>*/}

      </div></div>


    </div>








  </div>



}


function like() {
  alert("Вы жмякнули на кнопку");
}


export default Ava;