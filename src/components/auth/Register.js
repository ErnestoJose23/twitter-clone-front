import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 40;
  const left = 46.5;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Register() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [error, setError] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submitReg = async (e) => {
    e.preventDefault();
    try {
      const displayName = name + " " + surname;
      const newUser = { email, password, passwordCheck, displayName };
      const registerRes = await Axios.post(
        "http://localhost:5000/users/register",
        newUser
      );
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      localStorage.setItem("auth-token", loginRes.data.token);
      setEmail("");
      setPassword("");
      history.push("/");
    } catch (err) {}
  };

  const bodyModal = (
    <div style={modalStyle} className={classes.paper}>
      <h1 id="simple-modal-title">Registrate</h1>
      <p id="simple-modal-description">Es rápido y fácil.</p>

      <div className="separador"></div>
      <form className="register_form" onSubmit={submitReg}>
        <div className="register_name">
          <input
            className="register_input name_reg"
            placeholder="Nombre"
            id="register-name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="register_input name_reg"
            placeholder="Apellido"
            id="register-surname"
            onChange={(e) => setSurname(e.target.value)}
          ></input>
        </div>
        <input
          className="register_input"
          placeholder="Correo electrónico"
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="register_input"
          placeholder="Contraseña nueva"
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="register_input"
          placeholder="Repite la contraseña "
          id="register-password1"
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        ></input>
        <p className="register_politics">
          Al hacer clic en "Registrarte", aceptas nuestras Condiciones. Obtén
          más información sobre cómo recopilamos, usamos y compartimos tus datos
          en la Política de datos, así como el uso que hacemos de las cookies y
          tecnologías similares en la Política de cookies. Es posible que te
          enviemos notificaciones por SMS, que puedes desactivar cuando quieras.
        </p>
        <div className="button_class">
          <button className=" button_modal" type="submit">
            Registrate
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <button className="register_button" type="button" onClick={handleOpen}>
        Crear cuenta nueva
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyModal}
      </Modal>
      {error && <ErrorNotice message={error} />}
    </div>
  );
}

export default Register;
