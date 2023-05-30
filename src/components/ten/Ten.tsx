import React from "react";
import "./Ten.css";
const Ten = () => {
  return (
    <div className="ten-box">
      <div id="ten"></div>
      <div className="ten-wrapper">
        <div className="left">
          <img src="ten3.png" />
        </div>
        <div className="right">
          <div className="header">Присоединяйтесь к нам!</div>
          <div className="text">И вы сможете:</div>
          <div className="box">Покупать оптом выгоднее</div>
          <div className="box">Улучшить Unit-экономику</div>
          <div className="box">Зарабатывать в рознице больше</div>
          <div className="box">Продавать на маркетплейсах маштабнее</div>
        </div>
      </div>
    </div>
  );
};

export default Ten;
