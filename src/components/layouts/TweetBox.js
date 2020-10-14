import React from 'react'
import "./Feed.css"
import { Avatar, Button, IconButton} from "@material-ui/core"
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EventIcon from '@material-ui/icons/Event';

function TweetBox() {
    return (
        <div className="tweetbox">
            <Avatar className="tweetbox_avatar"/>
            <form className="tweetbox_form">
                <div className="tweetbox_input">
                 
                    <input placeholder="¿Qué está pasando?" type="text" />
                   
                </div>
                <div className="tweetbox_bottom"> 
                    <div className="tweetbox_options">
                        <label htmlFor="file-upload" className="label-file">
                        <IconButton>
                        <WallpaperIcon />
                        </IconButton>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            className="inputFile"
                        />
                        <IconButton>
                            <GifIcon />
                        </IconButton>
                        <IconButton>
                            <EqualizerIcon />
                        </IconButton>
                        <IconButton>
                            <InsertEmoticonIcon />
                        </IconButton>
                        <IconButton>
                            <EventIcon />
                        </IconButton>
                    </div>
                    <Button className="tweetbox_button"> Twittear</Button>
                </div>
               
            </form>
        </div>
    )
}

export default TweetBox
