import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">سیاوش خانی</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topbarIcon" />
            <span className="topIconBadge"></span>
          </div>
          <div className="topbarIconContainer">
            <Language className="topbarIcon" />
          </div>
          <div className="topbarIconContainer">
            <Settings className="topbarIcon" />
          </div>
          <img src="../../assets/img/me.jpeg" alt="" className="topAvatar" style={{marginRight:"20px"}}/>
        </div>
      </div>
    </div>
  );
}
