import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import styles from "./Register.module.css";

const RegisterForm = (Registro, error) => {


  const [datos,setDatos] = useState({
      nombre: '',
      email: '',
      username: '',
      password: ''
  })

  const {nombre, email, username, password} = datos;

  const handleSubmit = (e)=>{
      e.preventDefault();
      Registro(datos)
  }

const handleChange = ({target}) => {
  console.log(datos, target)
  setDatos({
  ...datos,
   [target.name]: target.value,
  })
}


  return (
    <div className={styles.contenedor}>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <input
          type=""
          name="nombre"
          value={nombre}
          placeholder="Nombre"
          className={styles.Inputs}
          required
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={email}
          placeholder="Correo"
          className={styles.Inputs}
          required
          onChange={handleChange}
        />

        <input
          type=""
          name="username"
          value={username}
          placeholder="Usuario"
          className={styles.Inputs}
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Contraseña"
          className={styles.Inputs}
          required
          onChange={handleChange}
        />

        <button type="submit" name="submit" className={styles.Button}>
          Registrar <AiOutlineUserAdd />
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
