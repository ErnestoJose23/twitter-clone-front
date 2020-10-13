import React from 'react'
import "./Feed.css"
import { Avatar, Button} from "@material-ui/core"
import WallpaperIcon from '@material-ui/icons/Wallpaper';

function TweetBox() {
    return (
        <div className="tweetbox">
               <Avatar />
            <form>
                <div className="tweetbox_input">
                 
                    <input placeholder="¿Qué está pasando?" type="text" />
                   
                </div>
                <div> 
                    <label htmlFor="file-upload" className="label-file">
              
                    <WallpaperIcon />
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        className="inputFile"
                    />
                    <Button> Tweet</Button>
                </div>
               
            </form>
        </div>
    )
}

export default TweetBox
