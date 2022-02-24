import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.pinimg.com/564x/90/de/2b/90de2b0edcfd196cce7783f6dc0e4bb9.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
