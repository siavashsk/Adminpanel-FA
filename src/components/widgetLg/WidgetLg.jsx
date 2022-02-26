import React from 'react';
import './widgetLg.css';

export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type }>{type}</button>
  }

  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">آخرین تراکنشها</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">مشتری</th>
          <th className="widgetLgTh">تاریخ</th>
          <th className="widgetLgTh">قیمت</th>
          <th className="widgetLgTh">وضعیت</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">سیاوش خانی</span>
          </td>
          <td className="widgetLgDate">1400/12/7</td>
          <td className="widgetLgAmount">ت 122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">ابوافضل حامدی</span>
          </td>
          <td className="widgetLgDate">1400/12/7</td>
          <td className="widgetLgAmount">ت 365.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">صادق درستی</span>
          </td>
          <td className="widgetLgDate">1400/12/4</td>
          <td className="widgetLgAmount">ت 90.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">سیاوش خانی</span>
          </td>
          <td className="widgetLgDate">1400/12/7</td>
          <td className="widgetLgAmount">ت 122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">ابوافضل حامدی</span>
          </td>
          <td className="widgetLgDate">1400/12/7</td>
          <td className="widgetLgAmount">ت 365.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">صادق درستی</span>
          </td>
          <td className="widgetLgDate">1400/12/4</td>
          <td className="widgetLgAmount">ت 90.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}
