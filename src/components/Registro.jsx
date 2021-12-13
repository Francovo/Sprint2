import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from "md5";
import RegisterForm from "./RegisterForm.jsx";
import styles from './Registro.module.css'

const Registro = () => {
    const url = "https://moviesbmaster.herokuapp.com/movies/";
    const navigate = useNavigate();

    const [error, SetError] = useState("");

    const Registro = async (datos) => {
        await axios
            .post(url, {
                id: datos.id,
                nombre: datos.nombre,
                email: datos.email,
                username: datos.username,
                password: md5(datos.password),
            })
            .then((Respuesta) => {
                Swal.fire("Usuario registrado con exito").then((response) => {
                    console.log(response);
                    if (response.isConfirmed === true) {
                        handleRedirect();
                    }
                });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleRedirect = () => {
        navigate("/");
    };

    return (
        <div className={styles.contenedor}>
            <RegisterForm Registro={Registro} error={error} />
        </div>
    );
};

export default Registro;