import React, { useRef } from "react";
import "./Four.css";
import { useInView } from "framer-motion";
import { motion as m } from "framer-motion";
interface FourItemProp {
  pic: string;
  text: string;
}
let data: FourItemProp[] = [
  {
    pic: "four1.svg",
    text: "Закупаем выбранный вами товар у производителя.",
  },
  {
    pic: "four2.svg",
    text: "Вы оплачиваете любым удобным вами способом. Мы переводим производителю в местной валюте.",
  },
  {
    pic: "four3.svg",
    text: "Привозим товар на наш склад в Китае и сортируем.",
  },
  {
    pic: "four4.svg",
    text: "Отправляем выбранным вами способом в пункт назначения в России.",
  },
  {
    pic: "four5.svg",
    text: "В зависимости от региона отправляем вам доставкой.",
  },
];
const Four = () => {
  const FourItem = (item: FourItemProp) => {
    return (
      <div className="four-item-box">
        <img src={item.pic} alt="n" />
        <span>{item.text}</span>
      </div>
    );
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="four-box">
      <div id="four"></div>
      <div className="four-wrapper">
        <m.div
          className="left"
          ref={ref}
          style={{
            opacity: isInView ? 1 : 0,
            translateY: isInView ? 0 : 100,
            transition: "all 1s",
          }}
        >
          <img src="four-pic.svg" />
          <div className="left-text">
            Мы полностью организуем
            <br /> процесс от закупа товара
            <br /> до получения вами.
          </div>
        </m.div>
        <m.div
          className="right"
          style={{
            opacity: isInView ? 1 : 0,
            translateY: isInView ? 0 : 100,
            transition: "all 1s",
          }}
        >
          {data.map((item) => (
            <FourItem {...item} />
          ))}
          <div className="four-end-text">
            Рекомендуем дополнительно приобрести страховку, чтобы обезопасить
            свой товар от не предвиданных ситуаций!
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Four;
