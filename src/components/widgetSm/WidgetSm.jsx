import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSm.css'

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <h3 className="widgetSmTitle">کاربران جدید</h3>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="../../assets/img/7.jpeg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetUsername">سیاوش خانی</span>
              <span className="widgetUserTitle">توسعه دهنده وب</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              نمایش
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="../../assets/img/7.jpeg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetUsername">سیاوش خانی</span>
              <span className="widgetUserTitle">توسعه دهنده وب</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              نمایش
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="../../assets/img/7.jpeg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetUsername">سیاوش خانی</span>
              <span className="widgetUserTitle">توسعه دهنده وب</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              نمایش
            </button>
          </li>

          <li className="widgetSmListItem">
            <img src="../../assets/img/7.jpeg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetUsername">سیاوش خانی</span>
              <span className="widgetUserTitle">توسعه دهنده وب</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              نمایش
            </button>
          </li>
          <li className="widgetSmListItem">
            <img src="../../assets/img/7.jpeg" alt="" className="widgetSmImg"/>
            <div className="widgetSmUser">
              <span className="widgetUsername">سیاوش خانی</span>
              <span className="widgetUserTitle">توسعه دهنده وب</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              نمایش
            </button>
          </li>
        </ul>
    </div>
  )
}
