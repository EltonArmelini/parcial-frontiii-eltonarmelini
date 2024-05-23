import { useState } from "react";
const CardInfo = (props) => {
    const [creditoEstado,setcreditoEstado] = useState("Rechazado!");
    if(props.client.sueldo >= 180000){
        setcreditoEstado("Aprobado!");
    }
  return (
    <div>
      <p>Los datos enviados son: </p>
      <ul>
        <ul>{props.client.sueldo}</ul>
        <li>Nombre y apellido: {props.client.nombre +" "+ props.client.apellido}</li>
        <li>Sueldo: {props.client.sueldo}</li>
        <li>Auto elegido: {props.client.auto}</li>
      </ul>
      <h3>Tu peticion de credito fue: {creditoEstado} </h3>
    </div>
  );
};

export default CardInfo;
