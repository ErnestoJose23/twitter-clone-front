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
    const [timesince, setTimesince] = useState();
    useEffect(() => {

        const fetchPosts = async () => 
        await Axios.get(`http://localhost:5000/users/getuser/${user_id}`).then((response) => {
            console.log(response);
            setUsername(response.data.username);
            setDisplayName(response.data.displayName);
            setAvatar(response.data.avatar);
            setVerified(response.data.verified)
          });
          setTimesince(timeDifference(Date.now(), timestamp));
          fetchPosts();
    }, [])


    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
    
        var elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + 'secs ';   
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + 'min ';   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + 'hours ';   
        }
    
        else if (elapsed < msPerMonth) {
            return  Math.round(elapsed/msPerDay) + 'days ';   
        }
    
        else if (elapsed < msPerYear) {
            return  Math.round(elapsed/msPerMonth) + 'months ';   
        }
    
        else {
            return  Math.round(elapsed/msPerYear ) + 'years ';   
        }
    }

    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName} <span className="post_headerSpecial">{verified && <VerifiedUserIcon className="post_badge"/>} @{username} - {timesince}
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
