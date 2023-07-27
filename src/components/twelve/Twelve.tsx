import React, { useEffect, useState } from "react";
import "./Twelve.css";
import { AiOutlinePlusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AnimatePresence, motion as m } from "framer-motion";
import axios from "axios";
import { url } from "../../axios";
interface TItemProp {
  question: string;
  answer: string;
}
//Мы не перевозим химические вещества, взрывчатые вещества, легко воспроменяющие вещества и всё, что запрещено законами РФ.
//Мы работаем со всеми, как с юридическими, так и физическими лицами.
//Мы предоставляем самые удобные и быстрые решения как для начинающих, так и для опытных.
//Мы KS Cargo, мы помогаем приобретать товары из Китая и привозить в Россию. Наш офис находится на территории ТЯК Москва, мы работаем напрямую с китайцами, имеем свой склад как в Китае, так и в Москве.
//Мы будем решать все вопросы, чтобы обеспечить гарантию того, что вы всё таки получите товар. Мало вероятно, что товар не пропустят на таможне, так как мы официально привозим товар, учитывая все экономические отношения.
// let data: TItemProp[] = [
//   {
//     question: "Какие товары вы не перевозите?",
//     answer:
//       "Мы не перевозим химические вещества, взрывчатые вещества, легко воспроменяющие вещества и всё, что запрещено законами РФ.",
//   },
//   {
//     question: "Работаете ли вы с физическими лицами?",
//     answer:
//       "Мы работаем со всеми, как с юридическими, так и физическими лицами.",
//   },
//   {
//     question: "Зачем мне пользоваться вашими услугами ?",
//     answer:
//       "Мы предоставляем самые удобные и быстрые решения как для начинающих, так и для опытных.",
//   },
//   {
//     question: "Что вы за компания, насколько вы надёжны?",
//     answer:
//       "Мы KS Cargo, мы помогаем приобретать товары из Китая и привозить в Россию. Наш офис находится на территории ТЯК Москва, мы работаем напрямую с китайцами, имеем свой склад как в Китае, так и в Москве.",
//   },
//   {
//     question: "Что вы будете делать, если товар не пропустят на таможне?",
//     answer:
//       "Мы будем решать все вопросы, чтобы обеспечить гарантию того, что вы всё таки получите товар. Мало вероятно, что товар не пропустят на таможне, так как мы официально привозим товар, учитывая все экономические отношения.",
//   },
// ];
const Twelve = () => {
  const [data, setData] = useState<TItemProp[]>([]);
  useEffect(() => {
    axios
      .get(url + "/api/question/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const TItem = (item: TItemProp) => {
    const [show, setShow] = useState(false);
    return (
      <div className="t-item-box" style={{ overflow: "hidden" }}>
        <div
          className="question-box"
          onClick={() => setShow(!show)}
          style={{ zIndex: 10 }}
        >
          <span>{item.question}</span>
          {show ? (
            // <div onClick={() => setShow(false)}>
            <FaMinusCircle className="icon" />
          ) : (
            // </div>
            // <div onClick={() => setShow(true)}>
            <FaPlusCircle className="icon" />
            // </div>
          )}
        </div>
        <AnimatePresence>
          {show && (
            <m.div
              className="answer-box"
              style={{ display: "flex", zIndex: 9 }}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              {/* style={show ? { display: "flex",zIndex:9 } : {zIndex:9}} > */}
              {item.answer}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  if (data.length > 0)
    return (
      <div className="twelve-box">
        <div id="twelve"></div>
        <div className="twelve-wrapper">
          <div className="header">Часто задаваемые вопросы</div>
          <div className="items-wrapper">
            {data.map((item) => (
              <TItem {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default Twelve;
