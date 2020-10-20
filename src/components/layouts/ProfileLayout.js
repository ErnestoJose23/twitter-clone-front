import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import './Profile.css'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Avatar, Button, IconButton} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
      padding: theme.spacing(2, 2, 3),
    },
  }));


function ProfileLayour() {
    const { userData, setUserData } = useContext(UserContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    var sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundImage: "url(https://sc2.elpais.com.uy/files/image_1254_485/uploads/2018/04/11/5ace0d44b87c3.jpeg)"
      };
      

    const body = (
    <div  className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        
    </div>
    );
    return (
        <div className="profile">
            <div className="profile_header">
                <IconButton><ArrowBackOutlinedIcon/></IconButton>
                <h2>{userData.displayName}</h2>
            </div>
            <div className="profile_usercard">
                {userData.cover ? (<div></div>) : (<div className="profile_cover" style={ sectionStyle }></div>)}
                <div className="profile_flex_avatar">
                    <Avatar className="profile_avatar" src={userData.avatar} />
                    <Button className="profile_editButton" onClick={handleOpen}>Editar Perfil</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className="editProfile_modal"
                    >
                        {body}
                    </Modal>
                </div>
                <div className="profile_description">
                    <h3>{userData.displayName}</h3>
                    <span>@{userData.username}</span>
                    <pan>{userData.description}</pan>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayour
