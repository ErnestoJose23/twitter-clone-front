import React from 'react'
import "./Sidebar.css"

function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebar_option ${active && 'sidebar_option_active'}`}>
            <Icon style={{ fontSize: 30 }}/>
            <div className="sidebar_option_title">{text}</div>
        </div>
    )
}


export default SidebarOption
