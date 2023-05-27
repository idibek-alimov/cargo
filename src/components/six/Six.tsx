import React from "react";
import "./Six.css";
const Six = () => {
  let width = window.screen.width;
  return (
    <div className="six-box">
      <div id="six"></div>
      <div className="six-wrapper">
        <h1>Калькулятор</h1>
        <div className="inner-box">
          <div className="left">
            <img src={`six2.${width < 600 ? "jpg" : "svg"}`} />
          </div>
          <div className="right">
            <span>
              <b>Итак, как же считать стоимость доставки?</b>
            </span>
            <span>
              Доставка считается в зависимости от плотности выбранной категории
              товара.
            </span>
            <span>Что такое плотность?</span>
            <span>Плотность - это масса делённые на объём, то есть кг/м³</span>
            <span className="example">
              Например: решили заказать скакалки,
              <br /> штук 1000. Общая масса будет 100 кг, объём
              <br /> 0,35 м³. Таким образом, плотность будет
              <br /> 100/0,35 = 285,7 кг/м³
            </span>
            <span>Соответсвенно это число умножаем на цену за плотность.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Six;
