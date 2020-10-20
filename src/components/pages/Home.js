import React from 'react'
import Sidebar from "../../components/layouts/Sidebar";
import Widge from "../../components/layouts/Widge";
import Feed from "../layouts/Feed";
import "../../App.css"

function Home() {
  const home = true;
    return (
        <div className="Home">

      <div className="app_body">
        <Sidebar home={home}/>
        <Feed  />
        <Widge />
      </div>
    </div>
    )
}

export default Home
