import React, { useRef } from "react";
import "./Five.css";
import { useGlobalContext } from "../../AppContext";
import { AppActionsKind } from "../../appDispatch";
import { useInView } from "framer-motion";
const Five = () => {
  const { clientDispatch } = useGlobalContext();
  const leftRef = useRef(null);
  //const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: false });
  //const rightInView = useInView(rightRef,{once:true})
  return (
    <div className="five-box">
      <div id="five"></div>
      <span className="header-middle-span">
        Составим финансовый учёт стоимости оказания услуг
      </span>
      <div className="five-wrapper">
        <div
          className="left"
          // style={{
          //   transform: leftInView ? "translateX(0px)" : "translateX(-200px)",
          //   transition: "all 1s",
          // }}
        >
          <span>Составим финансовый учёт стоимости оказания услуг</span>
          <span className="text">
            Со своими клиентами мы заключаем соглашение и подсчитываем стоимость
            заказа из Китая и доставки. Полностью рассчитываем закуп с
            производства, доставку до нашего склада в Китае, карго доставку в
            Россию по тарифу, страховку и доставку до вашего города, если вы не
            в Москве или Владивостоке.
          </span>
          <div className="button-box">
            <button
              ref={leftRef}
              onClick={() => {
                clientDispatch({
                  type: AppActionsKind.SET_SHOW,
                  payload: "hello",
                });
              }}
            >
              оставить заяваку
            </button>
          </div>
        </div>
        <div
          className="right"
          // style={{
          //   transform: leftInView ? "translateX(0px)" : "translateX(200px)",
          //   transition: "all 1s",
          // }}
        >
          <span className="right-span-hide">
            Составим финансовый учёт стоимости оказания услуг
          </span>
          <img src="five.png" />
        </div>
      </div>
    </div>
  );
};

export default Five;
