import React, { useContext, useState } from "react";
import "./Feed.css"
import { Avatar, Button, IconButton} from "@material-ui/core"
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EventIcon from '@material-ui/icons/Event';
import UserContext from "../../context/UserContext";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function TweetBox() {
    const { userData, setUserData } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const history = useHistory();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("file", file);
        var imagename = "";
        if (file != null) {
          var imagename = Date.now();
          console.log("aqui en imagen")
        }
        const displayName = userData.user;
        const user_id = userData.user_id;

        var timestamp = Date.now();
    
        console.log(timestamp);
        let tweet = title;
        const FeedData = {
          user_id,
          imagename,
          timestamp,
          tweet,
        };
    
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const FeedRes = Axios.post("http://localhost:5000/posts/upload", FeedData);
        if (file != null) {
          const FeedResImg = Axios.post(
            "http://localhost:5000/posts/uploadImg",
            formData,
            {
              headers: {
                path: imagename,
              },
            }
          );
        }
        
    
        setTitle("");
        setFile(null);
        imagename = "";
      };

    return (
        <div className="tweetbox">
            <Avatar className="tweetbox_avatar"/>
            <form className="tweetbox_form">
                <div className="tweetbox_input">
                    <input
                      type="text"
                      className="messageSender_input"
                      placeholder={`¿Qué está pasando?`}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      name="title"
                      required
                    />
                </div>
                <div className="tweetbox_bottom"> 
                    <div className="tweetbox_options">
                        <IconButton>
                          <label htmlFor="file-upload" >
                            <WallpaperIcon className="file-upload-button"/>
                          </label>
                        </IconButton>
                        <input
                          id="file-upload"
                          type="file"
                          className="inputFile"
                          onChange={(e) => setFile(e.target.files[0])}
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
                    <Button className="tweetbox_button"  onClick={handleSubmit} type="submit"> Twittear</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox
