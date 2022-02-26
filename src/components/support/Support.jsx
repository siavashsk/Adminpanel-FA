import React from "react";
import "./support.css";

export default function Support() {
  return (
    <div className="support">
      <div className="supportRight">
        <h1 className="supportTitle">به پشتیبانی نیاز داری؟</h1>
        <form className="supportForm">
          <div className="supportItem">
            <label htmlFor="">نام</label>
            <input type="text"/>
          </div>
          <div className="supportItem">
            <label htmlFor="">نام خانوادگی</label>
            <input type="text"/>
          </div>
          <div className="supportItem">
            <label htmlFor="">ایمیل</label>
            <input type="email"/>
          </div>
          <div className="supportItem">
            <label>استان</label>
            <select name="state" id="state" className="supportSelect">
              <option value="state" disabled>
                استان را انتخاب کنید
              </option>
              <option value="tehran">تهران</option>
              <option value="esfehan">اصفهان</option>
              <option value="shiraz">شیراز</option>
            </select>
          </div>
        </form>
          <button className="supportButton">درخواست پشتیبانی</button>
      </div>
      <div className="supportLeft"></div>
    </div>
  );
}
