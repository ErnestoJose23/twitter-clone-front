import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import './Profile.css'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Avatar, Button, IconButton} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Axios from "axios";

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
    const [cover, setCover] = useState();
    const [avatar,setAvatar] = useState();
    const [description, setDescription] = useState();
    const [displayName, setDisplayName] = useState();

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("file", cover);
        var coverImage = "";
        if (cover != null) {
          var coverImage = Date.now() + "cover";
          console.log("aqui en imagen")
        }
        const displayName = userData.user;
        const user_id = userData.user_id;

        var timestamp = Date.now();
    
        console.log(timestamp);
    
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
       // const FeedRes = Axios.post("http://localhost:5000/users/upload", FeedData);
        if (cover != null) {
          const FeedResImg = Axios.post(
            "http://localhost:5000/users/uploadCover",
            formData,
            {
              headers: {
                path: coverImage,
                user_id: userData.user_id
              },
            }
          );
        }
        
        setDescription("");
        setAvatar("");
        setCover("");
      };
    

    var sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundImage: "url(https://sc2.elpais.com.uy/files/image_1254_485/uploads/2018/04/11/5ace0d44b87c3.jpeg)"
      };
      var sectionStyleCover = {
        width: "100%",
        height: "200px",
        backgroundImage: `url(http://localhost:5000/${userData.cover}.PNG)`
      };
      
      console.log(userData)

    const body = (
    <div  className={classes.paper}>
        <form>
            <div>
                <label for="file-upload">Cover: </label>
                <input
                    id="file-upload"
                    type="file"
                    onChange={(e) => setCover(e.target.files[0])}
                />
            </div>
            <div>
                <label for="file-upload-avatar">Avatar: </label>
                <input
                    id="file-upload-avatar"
                    type="file"
                    onChange={(e) => setAvatar(e.target.files[0])}
                />
            </div>
            <div>
                <label for="file-upload-name">Nombre: </label>
                <input
                    id="file-upload-name"
                    type="text"
                    onChange={(e) => setDisplayName(e.target.files[0])}
                />
            </div>
            <div>
                <label for="file-upload-desc">Biografia: </label>
                <input
                    id="file-upload-desc"
                    type="text"
                    onChange={(e) => setDescription(e.target.files[0])}
                />
            </div>
            <Button className="profile_editButton" onClick={handleSubmit} >Guardar</Button>
        </form>
    </div>
    );
    return (
        <div className="profile">
            <div className="profile_header">
                <IconButton><ArrowBackOutlinedIcon/></IconButton>
                <h2>{userData.displayName}</h2>
            </div>
            <div className="profile_usercard">
                {userData.cover ? (<div className="profile_cover" style={ sectionStyleCover }></div>) : (<div className="profile_cover" style={ sectionStyle }></div>)}
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
                <div className="profile_options">
                  <ul>
                    <li className="active">Tweets</li>
                    <li>Tweets y respuestas</li>
                    <li>Fotos y videos</li>
                    <li>Me gusta</li>
                  </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileLayour
