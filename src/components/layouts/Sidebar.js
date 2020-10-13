import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import BlurCircularOutlinedIcon from '@material-ui/icons/BlurCircularOutlined';

function Sidebar() {
    return (
        <div>
            <TwitterIcon style={{ fontSize: 40 }}/>
            <div className="sidebar_options">
                <div className="sidebar_option"><HomeIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Inicio</div></div>
                <div className="sidebar_option"><SearchIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Explorar</div></div>
                <div className="sidebar_option"><NotificationsNoneIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Notificaciones</div></div>
                <div className="sidebar_option"><MailOutlineIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Mensajes</div></div>
                <div className="sidebar_option"><BookmarkBorderIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Guardados</div></div>
                <div className="sidebar_option"><FeaturedPlayListOutlinedIcon style={{ fontSize: 30 }}/><div className ="sidebar_option_title"> Listas</div></div>
                <div className="sidebar_option"><PersonOutlineOutlinedIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Perfil</div></div>
                <div className="sidebar_option"><BlurCircularOutlinedIcon style={{ fontSize: 30 }}/> <div className ="sidebar_option_title">Más opciones</div></div>
            </div>
        </div>
    )
}

export default Sidebar
