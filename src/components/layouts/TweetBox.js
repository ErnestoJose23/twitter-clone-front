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
        }
        const displayName = userData.user;
        const user_id = userData.user_id;
    
        var objToday = new Date(),
          curHour =
            objToday.getHours() > 12
              ? objToday.getHours() - 12
              : objToday.getHours() < 10
              ? "0" + objToday.getHours()
              : objToday.getHours(),
          curMinute =
            objToday.getMinutes() < 10
              ? "0" + objToday.getMinutes()
              : objToday.getMinutes(),
          curSeconds =
            objToday.getSeconds() < 10
              ? "0" + objToday.getSeconds()
              : objToday.getSeconds(),
          curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
        var dd = String(objToday.getDate()).padStart(2, "0");
        var mm = String(objToday.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = objToday.getFullYear();
        var timestamp =
          curHour +
          ":" +
          curMinute +
          ":" +
          curSeconds +
          " " +
          curMeridiem +
          " " +
          dd +
          "/" +
          mm +
          "/" +
          yyyy;
    
        console.log(timestamp);
        const FeedData = {
          displayName,
          imagename,
          timestamp,
          user_id,
          file,
          title,
        };
    
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const FeedRes = Axios.post("http://localhost:5000/feed/upload", FeedData);
        const FeedResImg = Axios.post(
          "http://localhost:5000/feed/uploadImg",
          formData,
          {
            headers: {
              path: imagename,
            },
          }
        );
    
        setTitle("");
        setFile("");
        imagename = "";
        history.push("/");
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
          />
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
                    <Button className="tweetbox_button"  onClick={handleSubmit}
          type="submit"> Twittear</Button>
                </div>
               
            </form>
        </div>
    )
}

export default TweetBox
