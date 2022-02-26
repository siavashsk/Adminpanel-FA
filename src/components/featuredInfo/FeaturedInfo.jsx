import React from "react";
import "./featuredInfo.css";
import { ArrowDownward,ArrowUpward,BarChart, MoneyOff,AttachMoney } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem revenue">
        <div className="featuredTitle">عملکرد</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
            11.02 -
            <ArrowDownward className="featuredIcon minus" />
            <BarChart className="featuredMoneyIcon"/>
          </span>
        </div>
        <span className="featuredSub">نسبت به ماه پیش</span>
      </div>
      <div className="featuredItem sales">
        <div className="featuredTitle">فروش</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,550</span>
          <span className="featuredMoneyRate">
            18.02 +
            <ArrowUpward className="featuredIcon"/>
            <AttachMoney className="featuredMoneyIcon"/>
          </span>
        </div>
        <span className="featuredSub">نسبت به ماه پیش</span>
      </div>
      <div className="featuredItem costs">
        <div className="featuredTitle">هزینه ها</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1,415</span>
          <span className="featuredMoneyRate">
            10.13 +
            <ArrowUpward className="featuredIcon"/>
            <MoneyOff className="featuredMoneyIcon"/>
          </span>
        </div>
        <span className="featuredSub">نسبت به ماه پیش</span>
      </div>
    </div>
  );
}
