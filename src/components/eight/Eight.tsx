import React, { useState } from "react";
import "./Eight.css";
import { motion as m } from "framer-motion";
interface EightItemProp {
  text: string;
}
const Eight = () => {
  const EightItem = (item: EightItemProp) => {
    return (
      <div className="eight-item-box">
        <img src={item.text} />
      </div>
    );
  };
  //let width = screen.width;
  return (
    <div className="eight-box">
      <div id="eight"></div>
      <div className="eight-wrapper">
        <div className="eight-header">Как выглядит наша работа наглядно?</div>
        <div className="text">Сортируем товар в Китае</div>
        <div className="items-box">
          {["china1.jpg", "china2.jpg", "china3.jpg"].map((item) => (
            <EightItem {...{ text: item }} />
          ))}
        </div>
        <div className="text">Принимаем товар в Москве</div>
        <div className="items-box">
          {["moscow1.jpg", "moscow2.jpg", "moscow3.jpg"].map((item) => (
            <EightItem {...{ text: item }} />
          ))}
        </div>
        <div className="eight-video-box">
          <div className="eight-video-wrapper">
            <video
              width={"100%"}
              height={"100%"}
              // height={window.screen.width > 600 ? 550 : 200}
              controls
              // style={{ borderRadius: 30 }}
              className="video"
              poster="hands.png"
            >
              <source src="ksvideo.mp4" type="video/mp4" />
              <source src="ksvideo.mov" type="video/mov" />
            </video>
            {/* <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            src="https://www.youtube.com/embed/vFFyX928D9k"
          ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eight;
