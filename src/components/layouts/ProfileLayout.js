import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import './Profile.css'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Avatar, Button, IconButton} from "@material-ui/core"


function ProfileLayour() {
    const { userData, setUserData } = useContext(UserContext);

    var sectionStyle = {
        width: "100%",
        height: "200px",
        backgroundImage: "url(https://sc2.elpais.com.uy/files/image_1254_485/uploads/2018/04/11/5ace0d44b87c3.jpeg)"
      };
      
    return (
        <div className="profile">
            <div className="profile_header">
                <IconButton><ArrowBackOutlinedIcon/></IconButton>
                <h2>{userData.displayName}</h2>
            </div>
            <div className="profile_usercard">
                {userData.cover ? (<div></div>) : (<div className="profile_cover" style={ sectionStyle }></div>)}
                <Avatar className="profile_avatar" src={userData.avatar} />
            </div>
        </div>
    )
}

export default ProfileLayour
