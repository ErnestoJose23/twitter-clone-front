import React, { useEffect, useState} from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"
import Axios from "axios"
import Pusher from 'pusher-js';

function Feed() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => 
    await Axios.get("http://localhost:5000/posts/sync").then((response) => {
        console.log(response);
        setPosts(response.data);
      });

    useEffect(() => {
          fetchPosts();
    }, [])

    useEffect(() => {

        const pusher = new Pusher('3cf3d0345670cadee20c', {
            cluster: 'eu'
          });
          
          const channel = pusher.subscribe('posts');
          channel.bind('inserted', function(data) {
              console.log("data received", data);
             fetchPosts();
          });
    },[])

    console.log(posts);
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Feed</h2>
            </div>
            <TweetBox />
            { posts.map((post) => (
                <Post user_id={post.user_id}  tweet={post.tweet} timestamp={post.timestamp} imagename={post.imagename} />
            ))}
            
          
        </div>
    )
}

export default Feed
