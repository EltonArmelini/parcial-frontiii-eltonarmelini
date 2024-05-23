import { useState } from "react";
import React from "react";
import CardInfo from "./CardInfo";
import Message from "./Message";
import FormStyles from "../styles/form.module.css";

const Form = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [client, setClient] = useState({
    nombre: "",
    apellido: "",
    email: "",
    sueldo: "",
    autoElegido: "",
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const handleName = (e) => {
    setClient({ ...client, nombre: e.target.value });
  };
  const handleApellido = (e) => {
    setClient({ ...client, apellido: e.target.value });
  };
  const handleMail = (e) => {
    setClient({ ...client, email: e.target.value });
  };
  const handleSueldo = (e) => {
    setClient({ ...client, sueldo: e.target.value });
  };
  const handleAuto = (e) => {
    setClient({ ...client, autoElegido: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      client.nombre.trim().length >= 3 &&
      client.apellido.trim().length >= 3 &&
      emailRegex.test(client.email.trim()) &&
      client.sueldo > 100000 &&
      client.autoElegido != "default"
    ) {
      setError(false);
      setShow(true);
      console.log("NO Error");
    } else {
      setError(true);
      setShow(false);
      console.log("Error");
    }
  };
  const handleReset = (e) => {
    e.preventDefault();
    setClient({
      nombre: "",
      apellido: "",
      email: "",
      sueldo: "",
      autoElegido: "",
    });
  };

  return (
    <>
      <h1 className={FormStyles.titulo} >Bienvenido! </h1>
      <p className={FormStyles.info} >Formulario para solicitar un crédito prendario</p>
      <form className={FormStyles.formulario} >
        <input
          placeholder="Nombre"
          type="text"
          value={client.nombre}
          onChange={handleName}
        />
        <input
          placeholder="Apellido"
          type="text"
          value={client.apellido}
          onChange={handleApellido}
        />
        <input
          placeholder="email"
          type="text"
          value={client.email}
          onChange={handleMail}
        />
        <input
          placeholder="Sueldo promedio(en AR$)"
          min="100000"
          type="number"
          value={client.sueldo}
          onChange={handleSueldo}
        />
        <select onChange={handleAuto} value={client.autoElegido}>
          <option value="default">-- Eligir un auto! --</option>
          <option value="toyota_highlander">Toyota Highlander</option>
          <option value="honda_crv">Honda CR-V</option>
          <option value="ford_explorer">Ford Explorer</option>
          <option value="chevrolet_traverse">Chevrolet Traverse</option>
          <option value="nissan_pathfinder">Nissan Pathfinder</option>
          <option value="mazda_cx9">Mazda CX-9</option>
        </select>
        <button onClick={handleSubmit}>Confirmar Pedido!</button>
        <button onClick={handleReset}>Limpiar datos</button>
      </form>
      {error && <Message />}
      {show && <CardInfo client={client} />}
    </>
  );
};

export default Form;
