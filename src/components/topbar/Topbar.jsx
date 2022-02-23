import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Rish Admin</span>
            </div>
            <div className="topRight">
                 <div className="topbarIconContainer">
                    <NotificationsIcon />
                    <span className="topIconBag">2</span>
                 </div>
                 <div className="topbarIconContainer">
                    <LanguageIcon />
                    <span className="topIconBag">2</span>
                 </div>
                 <div className="topbarIconContainer">
                    <SettingsIcon />
                 </div>
                 <img src="https://i.pinimg.com/564x/90/de/2b/90de2b0edcfd196cce7783f6dc0e4bb9.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div> 
  )
}

export default Topbar