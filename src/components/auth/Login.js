import React from 'react'
import "./Login.css"
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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

function Login() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
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
                <button type="button" onClick={handleOpen}>
                        react-transition-group
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
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <p id="transition-modal-description">react-transition-group animates me.</p>
                        </div>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Login
