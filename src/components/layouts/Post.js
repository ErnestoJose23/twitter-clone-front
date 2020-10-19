import { Avatar, IconButton } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import "./Feed.css"
import Axios from "axios"

function Post({user_id, timestamp, tweet, imagename}) {

    const [username, setUsername] = useState();
    const [displayName, setDisplayName] = useState();
    const [avatar, setAvatar] = useState();
    const [verified, setVerified] = useState(false);
    useEffect(() => {

        const fetchPosts = async () => 
        await Axios.get(`http://localhost:5000/users/getuser/${user_id}`).then((response) => {
            console.log(response);
            setUsername(response.data.username);
            setDisplayName(response.data.displayName);
            setAvatar(response.data.avatar);
            setVerified(response.data.verified)
          });

          fetchPosts();
    }, [])
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName} <span className="post_headerSpecial">{verified && <VerifiedUserIcon className="post_badge"/>} @{username} - {timestamp}
                        </span></h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{tweet}</p>
                    </div>
                </div>
                {imagename &&
                    <img src={imagename} alt="" />
                }
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
