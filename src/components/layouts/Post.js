import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username, verified, timestamp, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>Hola <span>{ verified && <VerifiedUserIcon className="post_badge"/>} @Hola
                        </span></h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Esto es una prueba de tweiiit</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post_footer">
                    <IconButton>
                        <ChatBubbleOutlineIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <RepeatIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderIcon fontSize="small"/>
                    </IconButton>
                    <IconButton>
                        <PublishIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Post
