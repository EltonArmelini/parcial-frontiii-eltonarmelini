import React from "react";

const Message = () => {
  return (
    <>
      <p>Por favor verificar campos ingresados!</p>
      <ul>
        <li>El nombre debe tener al menos 3 caracteres.</li>
        <li>El apellido debe tener al menos 3 caracteres.</li>
        <li>El correo electrónico debe ser válido.</li>
        <li>El sueldo debe ser mayor a $100,000.</li>
        <li>Debes seleccionar un auto.</li>
      </ul>
    </>
  );
};

export default Message;
