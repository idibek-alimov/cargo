import React, { useEffect, useRef, useState } from "react";
import "./Nine.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import { RxDotFilled } from "react-icons/rx";
import { motion as m, useAnimation } from "framer-motion";
interface NineItemProp {
  pic: string;
  name: string;
  company: string;
  comment: string;
}
let data: NineItemProp[] = [
  {
    pic: "person1.jpg",
    name: "Андрей",
    company: "ИП продавец на Вайлдберриз",
    comment:
      "Спасибо вашему карго за быструю доставку и качественный сервис. Спасибо Сиджо, с вами приятно общаться)",
  },
  {
    pic: "person2.jpg",
    name: "Валерия",
    company: "ИП продавец на Озон",
    comment:
      "Не была до конца уверена в качестве, но после пробной партии убедилась. Тебе знаю где можно надёжно и стабильно заказывать ",
  },
  {
    pic: "person3.jpg",
    name: "Ян",
    company: "Менеджер в ООО",
    comment:
      "Мне всё нравится. Искал оптимальный вариант. Спасибо помогли, а то раньше приходилось как-то пытаться объясняться с китайцами, а так вы облегчили мне работу!",
  },
  {
    pic: "person4.jpg",
    name: "Алеся",
    company: "Сотрудник розничного магазина",
    comment:
      "Хорошие и справедливые цены. Подходят для меня. Я всем довольна. Отдельное спасибо за финансовую таблицу.",
  },
];
const Nine = () => {
  //const [current, setCurrent] = useState(1);
  const [info, setInfo] = useState<Prop>({ prev: 4, current: 1 });
  const [clicked, setClicked] = useState(1);
  //   const [, forceUpdate] = useReducer((x) => x + 1, 0);

  //   function handleClick() {
  //     forceUpdate();
  //   }
  interface Prop {
    prev: number;
    current: number;
  }
  let current = useAnimation();
  let extra = useAnimation();
  let prevv = useAnimation();

  useEffect(() => {
    let a = document.querySelector(`#slide-${info.current}`);
    if (a != null) {
      a.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center",
      });
    }

    extra.set({
      x: 40,
      transition: { duration: 2, ease: "easeOut" },
    });
    extra.start({
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
      zIndex: 1,
    });

    prevv.set({
      x: -40,
      transition: { duration: 2, ease: "easeOut" },
    });
    prevv.start({
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
      zIndex: 1,
    });

    current.set({
      x: -30 * (info.current - info.prev),
      transition: { duration: 2, ease: "easeIn" },
    });
    current.start({
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
      zIndex: 2,
    });
  }, [info]);

  const containerRef = useRef<HTMLDivElement>(null);
  // const handleScroll = (event: React.UIEvent<HTMLElement>) => {
  //   const container = containerRef.current;
  //   if (container != null) {
  //     const scrollLeft = container.scrollLeft;
  //     let place: Prop;
  //     if (scrollLeft === 0) {
  //       place = { prev: info.current, current: 1 };
  //       //alert("matched 1");
  //       setInfo(place);
  //     } else if (scrollLeft == 410) {
  //       place = { prev: info.current, current: 2 };
  //       //alert("matched 2");
  //       setInfo(place);
  //     } else if (scrollLeft == 1100) {
  //       place = { prev: info.current, current: 3 };
  //       //alert("matched 3");
  //       setInfo(place);
  //     } else if (scrollLeft == 1500) {
  //       place = { prev: info.current, current: 4 };
  //       //alert("matched 4");
  //       setInfo(place);
  //     }
  //   }
  // };
  const NineItem = (item: NineItemProp) => {
    return (
      <div className="nine-item-box">
        <div className="left">
          <img src={item.pic} />
        </div>
        <div className="right">
          <div className="name">{item.name}</div>
          <p className="company">{item.company}</p>
          <p className="comment">{item.comment}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="nine-box">
      <div id="nine" style={{ marginBottom: 60 }}></div>
      <div className="nine-wrapper">
        <div className="nine-header">Отзывы</div>
      </div>
      <div className="scroller-wrapper">
        <div
          className="items-wrapper"
          // onScroll={handleScroll}
          ref={containerRef}
          // onScrollCapture={() => {
          //   console.log("captured");
          // }}
        >
          {data.map((item, index) => (
            <div id={`slide-${index + 1}`}>
              <NineItem {...item} />
            </div>
          ))}
        </div>
        <div className="navigation-wrapper">
          {[1, 2, 3, 4].map((item) => {
            if (info.current != item) {
              if (info.prev < info.current) {
                return (
                  <m.div
                    animate={
                      info.current > item && info.prev <= item ? extra : {}
                    }
                    onClick={() => {
                      let place: Prop = { prev: info.current, current: item };
                      setInfo(place);
                    }}
                  >
                    <RxDotFilled color={"orange"} size={35} />
                  </m.div>
                );
              } else {
                return (
                  <m.div
                    animate={
                      info.current < item && info.prev >= item ? prevv : {}
                    }
                    onClick={() => {
                      let place: Prop = { prev: info.current, current: item };
                      setInfo(place);
                      setClicked(clicked + 1);
                    }}
                  >
                    <RxDotFilled color={"orange"} size={35} />
                  </m.div>
                );
              }
            } else
              return (
                <m.div animate={current}>
                  <RxDotFilled color="orangered" size={50} />
                </m.div>
              );
          })}
        </div>
        {/* <div className="nav-button-wrapper">
          <div
            className="icon-box"
            onClick={() => {
              if (current === 1) {
                setCurrent(4);
              } else {
                setCurrent(current - 1);
              }
            }}
          >
            <AiFillCaretLeft
              size={30}
              color="white"
              style={{ marginLeft: -2 }}
            />
          </div>
          <div
            className="icon-box"
            onClick={() => {
              if (current === 4) {
                setCurrent(1);
              } else {
                setCurrent(current + 1);
              }
            }}
          >
            <AiFillCaretRight
              size={30}
              style={{ marginRight: -2 }}
              color="white"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Nine;
