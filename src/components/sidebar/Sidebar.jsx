import {
  LineStyle,
  Timeline,
  TrendingUp,
  MailOutline,
  Report,
  ChatBubbleOutline,
  PermIdentity,
  WorkOutline,
  BarChart,
  AttachMoney,
  DynamicFeed,
  Storefront,
  Home,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">داشبورد</h3>
          <ul className="sidebarList">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" />
                خانه
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              آنالیز
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              فروش ها
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">منوی کاربر</h3>
          <ul className="sidebarList">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                کاربران
              </li>
            </Link>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              مدیریت
            </li>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                محصولات
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              تراکنشها
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              گزارشات
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">بیشتر</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              نامه
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              پیغام ها
            </li>
            <Link to="/support" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                پشتیبانی
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
