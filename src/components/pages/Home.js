import React from 'react'
import Sidebar from "../../components/layouts/Sidebar";
import Widge from "../../components/layouts/Widge";
import Feed from "../layouts/Feed";
import "../../App.css"

function Home() {
    return (
        <div className="Home">

      <div className="app_body">
        <Sidebar />
        <Feed  />
        <Widge />
      </div>
    </div>
    )
}

export default Home
