import React, { useState, useContext, useEffect } from "react";
import "./Sidebar.css"
import { useHistory } from "react-router-dom";
import SidebarOption from "./SidebarOption"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BlurCircularOutlinedIcon from '@material-ui/icons/BlurCircularOutlined';
import {Avatar, Button, IconButton} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UserContext from "../../context/UserContext";

function Sidebar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { userData, setUserData } = useContext(UserContext);
    let history = useHistory();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const LogOut = () => {
      setUserData({
        token: undefined,
        user: undefined,
      });
      localStorage.setItem("auth-token", "");
      history.push("/login");
    };
    return (
        <div className="sidebar">
            <TwitterIcon style={{ fontSize: 35}} className="sidebar_logo"/>
            <div className="sidebar_options">
                <SidebarOption Icon={HomeIcon} text={"Inicio"} active/>
                <SidebarOption Icon={SearchIcon} text={"Explorar"} />
                <SidebarOption Icon={NotificationsNoneIcon} text={"Notificaciones"} />
                <SidebarOption Icon={MailOutlineIcon} text={"Mensajes"} />
                <SidebarOption Icon={BookmarkBorderIcon} text={"Guardados"} />
                <SidebarOption Icon={FeaturedPlayListOutlinedIcon} text={"Listas"} />
                <SidebarOption Icon={PersonOutlineOutlinedIcon} text={"Perfil"} />
                <SidebarOption Icon={BlurCircularOutlinedIcon} text={"Más opciones"} />
               
            </div>
            <Button variant="outlined" className="sidebar_button" fullWidth>Twittear</Button>

            <div className="sidebar_user" onClick={handleClick}>
            <Avatar
            aria-controls="simple-menu"
            aria-haspopup="true"
          
            className="header_avatar"
            src={userData.avatar}
          ></Avatar>
                <div className="sidebar_username"><strong>{userData.displayName}</strong> <span> @{userData.username}</span></div> <ExpandMoreIcon />
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                      transform: ' translateY(-90%)',
                    }
                  }}
            >
                <MenuItem onClick={handleClose}>Agregar una cuenta existente</MenuItem>
                <MenuItem onClick={LogOut}>Cerrar sesión</MenuItem>

            </Menu>
        </div>
    )
}

export default Sidebar
