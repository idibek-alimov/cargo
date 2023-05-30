import React from "react";
import "./End.css";
import { SlSocialVkontakte } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { BsWhatsapp, BsWechat } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { AppActionsKind } from "../../appDispatch";
import { useGlobalContext } from "../../AppContext";
const End = () => {
  const { clientDispatch } = useGlobalContext();
  return (
    <div className="end-box">
      <div id="end"></div>
      <div className="end-wrapper">
        <div className="top">
          <div className="left">
            <span>KS Cargo</span>
            <div className="icon-box">
              {/* <SlSocialVkontakte className="icon" /> */}
              <div
                onClick={() => {
                  clientDispatch({
                    type: AppActionsKind.SET_WE_CHAT_SHOW,
                    payload: "hello",
                  });
                }}
              >
                <BsWechat className="icon" />
              </div>
              <div
                onClick={() => (window.location.href = "https://t.me/Sijo03")}
              >
                <TbBrandTelegram className="icon" />
              </div>
              <div
                onClick={() =>
                  (window.location.href = "https://wa.me/+79090994293")
                }
              >
                <BsWhatsapp className="icon" />
              </div>
              <div
                onClick={() =>
                  (window.location.href = "mailto:kscargo7577@gmail.com")
                }
              >
                <AiOutlineGoogle className="icon" />
              </div>
            </div>
          </div>
          <div className="middle">
            <a className="header">Меню </a>
            <a href="#second" className="middle-text">
              О нас
            </a>
            <a href="#third" className="middle-text">
              Прайс
            </a>
            <a href="#seven" className="middle-text">
              Калькулятор
            </a>
            <a href="#nine" className="middle-text">
              Отзывы
            </a>
            <a href="#end" className="middle-text">
              Контакты
            </a>
          </div>
          <div className="right">
            <div className="header">Контакты</div>
            <div className="info">Тел.: 8 909 099 42 93</div>
            <div className="info">Почта: kscargo7577@gmail.com</div>
            <div className="info">
              Офис: г. Москва, ул. Тихорецкий бульвар, 1 ст3
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="ali-box">
            <span>Москва 2023 Все права защищены KS Cargo ©</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "https://t.me/Jovid001")}
            >
              Site created by{" "}
              <span style={{ textDecoration: "underline" }}>
                Idibek & Jovid
              </span>
            </span>
          </div>
          <div className="document-box">
            {/* <div className="documentation">Документация</div> */}
            <div className="documentation">Политика кофиденциальности</div>
            <div className="documentation">
              Cогласие на обработку персональных данных
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
