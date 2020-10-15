import React, { useState, useContext, useEffect } from "react";
import "./Login.css"
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Register from "./Register"
import Axios from "axios";
import UserContext from "../../context/UserContext";


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Login(token) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let history = useHistory();
    
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
  
    const { userData, setUserData } = useContext(UserContext);

  
    const submit = async (e) => {
      e.preventDefault();
      try {
        const loginRes = await Axios.post("http://localhost:5000/users/login", {
          email,
          password,
        });
        console.log(loginRes);
        setUserData([{ token: loginRes.data.token, user: loginRes.data.user }]);
        localStorage.setItem("auth-token", loginRes.data.token);
        console.log(userData);
        history.push("/");
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
    };
  
    useEffect(() => {
      console.log(token);
    }, []);
  
    const LoginForm = (
      <form className="login_form" onSubmit={submit}>
        <input
          className="login_input"
          placeholder="Correo electrónico o número de teléfono"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <input
          className="login_input"
          placeholder="Contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className=" login_input login_button" type="submit">
          Iniciar sesión
        </button>
      </form>
    );
  
    return (
        <div className="login">
            <div className="login_left">
                <div className="login_leftTextall">
                <div className="login_leftText"><SearchIcon fontSize="large"/> Follow your interests.</div>
                <div className="login_leftText"><PeopleOutlineIcon fontSize="large"/> Hear what people are talking about.</div>
                <div className="login_leftText"><ChatBubbleOutlineIcon fontSize="large"/> Join the conversation.</div>
                </div>
            </div>
            <div className="login_right">
                <div className="form_right">
                <TwitterIcon />
                <div className="form_text"><h1>See what's happening in the world right now</h1></div>
                <Register />
                <button type="button" onClick={handleOpen} className="login_button">
                        Log in
                    </button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        {LoginForm}
                        </Fade>
                    </Modal>
                   
                </div>
            </div>
        </div>
    )
}

export default Login
