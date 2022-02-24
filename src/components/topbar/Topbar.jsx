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
                 <img src="https://i.pinimg.com/564x/eb/59/2d/eb592d3e2cbd29a1e97002bd93f4904b.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div> 
  )
}

export default Topbar