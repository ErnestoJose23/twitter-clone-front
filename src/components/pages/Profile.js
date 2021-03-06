import React from 'react'
import Sidebar from "../../components/layouts/Sidebar";
import Widge from "../../components/layouts/Widge";
import ProfileLayout from "../layouts/ProfileLayout";
import "../../App.css"


function Profile() {
    const home = false;
    const profile = true;
    return (
        <div className="Home">

      <div className="app_body">
        <Sidebar home={home} profile={profile}/>
        <ProfileLayout />
        <Widge />
      </div>
    </div>
    )
}

export default Profile
