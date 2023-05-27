import React, { useState } from "react";
import "./Top.css";
import { useGlobalContext } from "../../AppContext";
import { AppActionsKind } from "../../appDispatch";
import { AiOutlineMenu } from "react-icons/ai";
import { AnimatePresence, motion as m } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
const Top = () => {
  const [show, setShow] = useState(false);
  const Menu = () => {
    return (
      <div className="menu">
        <a href="#second">О нас</a>
        <a href="#third">Прайс</a>
        <a href="#seven">Калькулятор</a>
        <a href="#nine">Отзывы</a>
        <a href="#end">Контакты</a>
      </div>
    );
  };
  const { clientDispatch } = useGlobalContext();
  return (
    <div className="top-box">
      <div className="top-wrapper">
        <div className="menu-icon-box">
          {show && (
            <m.div
              onClick={() => setShow(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <RxCross2 size={30} style={{ fontWeight: "800" }} />
            </m.div>
          )}{" "}
          {!show && (
            <m.div
              onClick={() => setShow(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ position: "absolute", top: 0, marginTop: 10 }}
            >
              <AiOutlineMenu size={30} style={{ fontWeight: "800" }} />
            </m.div>
          )}
        </div>
        <a className="logo" href="#first">
          KS Cargo
        </a>
        <div className="desktop-menu" style={{ width: "60%" }}>
          <Menu />
        </div>
        <AnimatePresence>
          {show && (
            <m.div
              className="mini-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "fit-content" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              onClick={() => setShow(false)}
            >
              <Menu />
              <button
                className="contact"
                onClick={() => {
                  clientDispatch({
                    type: AppActionsKind.SET_SHOW,
                    payload: "hello",
                  });
                }}
              >
                Оформить заказ
              </button>
            </m.div>
          )}
        </AnimatePresence>
        <button
          className="contact"
          onClick={() => {
            clientDispatch({
              type: AppActionsKind.SET_SHOW,
              payload: "hello",
            });
          }}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default Top;
