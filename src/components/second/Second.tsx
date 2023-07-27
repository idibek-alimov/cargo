import React from "react";
import "./Second.css";
const Second = () => {
  return (
    <div className="second-box">
      {/* <div id="second"></div> */}
      <div className="second-wrapper">
        <div className="second-header">О нас</div>
        <div className="second-texts">
          <div className="inner-left">
            {/* <img src="./second-trucks.svg" /> */}
            <img src="secondAngar3.svg" />
          </div>
          <div className="inner-right">
            <div className="info">
              <b>KS Cargo</b> - карго компания, предоставляющая
              <br /> услуги по выкупу c доставкой товаров из Китая.
            </div>
            <div className="info-mobile">
              <b>KS Cargo</b> - карго компания, предоставляющая услуги по выкупу
              c доставкой товаров из Китая.
            </div>
            <ul>
              <li>Работаем с Гуанчжоу, Пекином, Иу и прочими городами.</li>
              <li>
                Привозим в Москву в ТЯК Москва, Садовод, Южные Ворота, во
                Владивосток, а также рассылаем по регионам РФ
              </li>
              <li>Доставляем через авиа, ж/д и авто доставку.</li>
            </ul>
          </div>
        </div>
        <div className="second-pic-box">
          <img src="./map.svg" alt="nothing" />
        </div>
      </div>
    </div>
  );
};

export default Second;
