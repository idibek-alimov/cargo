import React, { useReducer, useState } from "react";
import "./Seven.css";
import Selector from "./selector/Selector";
import { AppActionsKind, appReducer } from "./appDispatch";
import axios from "axios";
import Radio from "./radio/Radio";

export interface SevenProp {
  name: string;
  number: string;
  productType: string;
  productName: string;
  quantity: number | null;
  mass: number | null;
  deliveryMethod: string;
  address: string;
  insurance: boolean;
  comment: string;
  deliveryPrice: number | null;
  deliveryTime: number | null;
}
export let emptySevenItem: SevenProp = {
  name: "",
  number: "",
  productType: "",
  productName: "",
  quantity: null,
  mass: null,
  deliveryMethod: "",
  address: "",
  insurance: false,
  comment: "",
  deliveryPrice: null,
  deliveryTime: null,
};
const Seven = () => {
  const [info, sevenDispatch] = useReducer(appReducer, emptySevenItem);
  const [posted, setPosted] = useState(false);
  const clickHandle = () => {
    if (
      info &&
      info.name != "" &&
      info.number != "" &&
      info.number.length >= 10 &&
      info.productType != "" &&
      info.productName != "" &&
      info.quantity != null &&
      info.quantity > 0 &&
      info.mass != null &&
      info.mass > 0 &&
      info.deliveryMethod != "" &&
      info.address != ""
    ) {
      let summ = 0.0;
      let time = 0;
      //      ["Одежда", "Обувь", "Хостовары", "Электроника"];
      if (
        info.productType === "Хозтовары" ||
        info.productType === "Электроника"
      ) {
        //["Авто", "Экспресс Авто", "Авиа", "Ж/Д"]
        if (info.deliveryMethod === "Авто") {
          summ = summ + info.quantity * info.mass * 3.3;
          time = 20;
        } else if (info.deliveryMethod === "Экспресс Авто") {
          summ = summ + info.quantity * info.mass * 4;
          time = 13;
        } else if (info.deliveryMethod === "Авиа") {
          summ = summ + info.quantity * info.mass * 5.6;
          time = 8;
        } else if (info.deliveryMethod === "Ж/Д") {
          summ = summ + info.quantity * info.mass * 4;
          time = 36;
        }
      } else if (
        info.productType === "Одежда" ||
        info.productType === "Обувь"
      ) {
        if (info.deliveryMethod === "Авто") {
          summ = summ + info.quantity * info.mass * 4.7;
          time = 25;
        } else if (info.deliveryMethod === "Экспресс Авто") {
          summ = summ + info.quantity * info.mass * 4.7;
          time = 17;
        } else if (info.deliveryMethod === "Авиа") {
          summ = summ + info.quantity * info.mass * 5;
          time = 9;
        } else if (info.deliveryMethod === "Ж/Д") {
          summ = summ + info.quantity * info.mass * 4;
          time = 37;
        }
      }
      if (info.insurance) {
        summ = summ + info.mass * info.quantity * 3;
      }
      if (summ < 100) {
        summ = 100;
      }
      if (info.address === "Регионы РФ") {
        summ = summ + 150;
        time = time + 2;
      }
      sevenDispatch({
        type: AppActionsKind.ADD_DELIVERY_PRICE,
        payload: Number(summ),
      });
      sevenDispatch({
        type: AppActionsKind.ADD_DELIVERY_TIME,
        payload: Number(time),
      });
      if (!posted) {
        axios
          .post("https://mail.kscargo.ru/api/calculator/", {
            ...info,
            deliveryPrice: summ,
            deliveryTime: time,
          })
          .then((res) => {
            console.log(res.data);
            setPosted(true);
          })
          .catch((err) => console.log(err));
      }
    } else {
      alert("Пожалуйста заполните все поле");
    }
  };
  return (
    <div className="seven-box">
      <div id="seven"></div>
      {/* <Radio /> */}
      <div className="seven-wrapper">
        <div className="item-box has-input">
          <input
            placeholder="Имя"
            required
            onChange={(event) => {
              sevenDispatch({
                type: AppActionsKind.ADD_NAME,
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div className="item-box has-input">
          <input
            placeholder="Номер"
            required
            onChange={(event) => {
              sevenDispatch({
                type: AppActionsKind.ADD_NUMBER,
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div className="item-box">
          <Selector
            options={["Одежда", "Обувь", "Хозтовары", "Электроника"]}
            func={(text) =>
              sevenDispatch({
                type: AppActionsKind.ADD_PRODUCT_TYPE,
                payload: text,
              })
            }
            placeholder={"Вид товара"}
          />
        </div>

        {/* q */}
        <div className="item-box has-input">
          <input
            placeholder="Товар"
            onChange={(event) => {
              sevenDispatch({
                type: AppActionsKind.ADD_PRODUCT_NAME,
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div className="item-box has-input">
          <input
            placeholder="Количество"
            onChange={(event) => {
              sevenDispatch({
                type: AppActionsKind.ADD_QUANTITY,
                payload: Number(event.target.value),
              });
            }}
            type="number"
          />
        </div>
        <div className="item-box has-input" style={{ position: "relative" }}>
          <input
            placeholder="Масса единицы товара"
            type="number"
            onChange={(event) => {
              sevenDispatch({
                type: AppActionsKind.ADD_MASS,
                payload: Number(event.target.value),
              });
            }}
          />
          <span className="mass-span">кг</span>
        </div>

        {/* q */}
        <div className="item-box">
          <Selector
            options={["Авто", "Экспресс Авто", "Авиа", "Ж/Д"]}
            func={(text) =>
              sevenDispatch({
                type: AppActionsKind.ADD_DELIVERY_METHOD,
                payload: text,
              })
            }
            placeholder={"Способ доставки"}
          />
        </div>
        <div className="item-box">
          <Selector
            options={["Москва", "Владивосток", "Регионы РФ"]}
            func={(text) =>
              sevenDispatch({
                type: AppActionsKind.ADD_ADDRESS,
                payload: text,
              })
            }
            placeholder={"Пункт назначения"}
          />
        </div>

        <div className="radio-wrapper">
          <div className="item-box radio-box">
            <span>Страховка</span>
            <div style={{ marginLeft: 10 }}>
              <Radio
                active={info.insurance}
                setActive={(active: boolean) =>
                  sevenDispatch({
                    type: AppActionsKind.ADD_INSURANCE,
                    payload: Boolean(active),
                  })
                }
              />
            </div>
          </div>
          <span className="middle-hide hide-span">
            Внимание! Данные приблизительные, для точной информации свяжитесь с
            менеджером
          </span>
          <button className="middle-hide hide-button" onClick={clickHandle}>
            Рассчитать стоимость
          </button>
        </div>
        <div className="comment-box">
          <textarea
            placeholder="Комментарий"
            onChange={(event) => {
              sevenDispatch({
                type: AppActionsKind.ADD_COMMENT,
                payload: event.target.value,
              });
            }}
          />
        </div>
        <div className="bottom-box">
          <span>
            Внимание! Данные приблизительные, для точной информации свяжитесь с
            менеджером
          </span>
          <button onClick={clickHandle}>Рассчитать стоимость</button>
        </div>
        <div className="calculate-box">
          <div className="calculate-item">
            {info.deliveryPrice ? (
              <div>Стоимость доставки = {info.deliveryPrice} $</div>
            ) : (
              ""
            )}
          </div>
          <div className="calculate-item">
            {info.deliveryTime ? (
              <div>
                Время доставки = {info.deliveryTime} - {info.deliveryTime + 2}{" "}
                дней
              </div>
            ) : (
              ""
            )}
          </div>
          {info.deliveryTime ? (
            <span className="ending-span">
              Спасибо, что воспользовались нашим сервисом. Мы свяжемся с вами в
              ближайшее время!
            </span>
          ) : (
            ""
          )}
        </div>
        {/* {info.deliveryTime ? (
          <span>
            Спасибо, что воспользовались нашим сервисом. Мы свяжемся с вами в
            ближайшее время!
          </span>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Seven;
