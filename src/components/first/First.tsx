import React from "react";
import "./First.css";
const First = () => {
  return (
    <div className="first-box">
      <div id="first"></div>
      <div className="first-wrapper">
        <div className="first-left">
          <h1 className="h1-desktop">
            {/* Доставляем товары
            <br /> из Китая в любую
            <br /> точку России{" "} */}
            Выкупим ваш товар из Китая и доставим в любую точку России
          </h1>
          <span className="h1-mobile">
            Доставляем товары из Китая
            <br /> в любую точку России{" "}
          </span>
          <span className="secondary-text">
            Узнайте стоимость доставки и<br /> получите консультацию бесплатно
          </span>
          <button>
            <a href="#seven">РАСЧИТАТЬ СТОИМОСТЬ</a>
          </button>
        </div>
        <div className="first-right">
          <img src="./combination2.svg" alt="n" className="first-img" />
        </div>
        <div className="first-right-mobile">
          <img src="hands.png" alt="n" className="first-img" />
        </div>
      </div>
      <div id="second" style={{ marginBottom: 20 }}></div>
    </div>
  );
};

export default First;
