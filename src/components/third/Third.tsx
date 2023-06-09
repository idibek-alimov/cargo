import React from "react";
import "./Third.css";
import { useGlobalContext } from "../../AppContext";
import { AppActionsKind } from "../../appDispatch";
import { BsTruck, BsAirplane } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineTrain } from "react-icons/md";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiTruckLine } from "react-icons/ri";
interface ThirdItemProp {
  pic: string;
  number: number;
  top_text: string;
  first_text: string;
  second_text: string;
}
// let data: ThirdItemProp[] = [
//   {
//     pic: "truck.png",
//     top_text: "Авто",
//     first_text: "от 20",
//     second_text: "1.7 ",
//   },
//   {
//     pic: "express-truck.png",
//     top_text: "Экспресс Авто",
//     first_text: "до 12",
//     second_text: "2.5 ",
//   },
//   {
//     pic: "plain.png",
//     top_text: "Авиа",
//     first_text: "от 9",
//     second_text: "5",
//   },
//   {
//     pic: "train.png",
//     top_text: "Ж/Д",
//     first_text: "от 35-40",
//     second_text: "1.5",
//   },
// ];
const Third = () => {
  let width = window.screen.width;
  let data: ThirdItemProp[] = [
    {
      pic: `truck.${width < 600 ? "png" : "png"}`,
      number: 1,
      top_text: "Авто",
      first_text: "от 20",
      second_text: "1.7 ",
    },
    {
      pic: `express-truck.${width < 600 ? "png" : "png"}`,
      number: 2,
      top_text: "Экспресс Авто",
      first_text: "от 12",
      second_text: "2.5 ",
    },
    {
      pic: `plain.${width < 600 ? "png" : "png"}`,
      number: 3,
      top_text: "Авиа",
      first_text: "до 9",
      second_text: "5",
    },
    {
      pic: `train.${width < 600 ? "png" : "png"}`,
      number: 4,
      top_text: "Ж/Д",
      first_text: "от 35-40",
      second_text: "1.5",
    },
  ];

  interface JovidProp {
    number: number;
  }
  const ThirdItem = (item: ThirdItemProp) => {
    const { clientDispatch } = useGlobalContext();

    const IconItem = ({ number }: JovidProp) => {
      if (number === 1) {
        return <RiTruckLine className="third-icon simple-truck" />;
      } else if (number === 2) {
        return <TbTruckDelivery className="third-icon express-truck-icon" />;
      } else if (number === 3) {
        return <BsAirplane className="third-icon" />;
      } else {
        return <MdOutlineTrain className="third-icon train" />;
      }
    };
    return (
      <div className="third-item-box">
        <div className="top">
          <IconItem number={item.number} />
          {/* <img src={item.pic} /> */}
          <span>{item.top_text}</span>
        </div>
        <div className="first">
          <h3>Средняя доставка</h3>
          <span>{item.first_text} дней</span>
        </div>
        <div className="second">
          <h3>Цена за плотность</h3>
          <span>от {item.second_text}$ за кг/м³</span>
        </div>
        <div className="item-button">
          <button
            onClick={() => {
              clientDispatch({
                type: AppActionsKind.ADD_DELIVERY_METHOD,
                payload: item.top_text,
              });
            }}
          >
            Выбрать
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="third-box">
      <div id="third"></div>
      <div className="third-wrapper">
        <span className="header-text">Прайс</span>
        <div className="items-wrapper">
          {data.map((item) => (
            <ThirdItem {...item} />
          ))}
        </div>
        <div className="third-bottom-text">
          Тарифы и цены приблизительные и зависят от вида товара и объёма.
          Проконсультируйтесь с менеджером.
        </div>
      </div>
    </div>
  );
};

export default Third;
