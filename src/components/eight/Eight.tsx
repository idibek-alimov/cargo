import React, { useEffect, useState } from "react";
import "./Eight.css";
import { motion as m } from "framer-motion";
import axios from "axios";
import { url } from "../../axios";
interface EightItemProp {
  id: number;
  pic: string;
}
interface VideoProp {
  id: number;
  upload: string;
}
const Eight = () => {
  const [china, setChina] = useState<EightItemProp[]>([]);
  const [moscow, setMoscow] = useState<EightItemProp[]>([]);
  const [video, setVideo] = useState<VideoProp[]>([]);

  const EightItem = (item: EightItemProp) => {
    return (
      <div className="eight-item-box">
        <img src={item.pic} />
      </div>
    );
  };

  useEffect(() => {
    axios
      .get(url + "/api/moscow/")
      .then((res) => {
        setMoscow(res.data);
        console.log("moscow pics", res.data);
      })
      .catch((err) => console.log("fucking error from moscow", err));
    axios
      .get(url + "/api/china/")
      .then((res) => {
        setChina(res.data);
        console.log("china pics", res.data);
      })
      .catch((err) => console.log("fucking error from china", err));
    axios
      .get(url + "/api/video/")
      .then((res) => {
        setVideo(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("fucking error from video", err));
  }, []);
  //let width = screen.width;
  return (
    <div className="eight-box">
      <div id="eight"></div>
      <div className="eight-wrapper">
        <div className="eight-header">Как выглядит наша работа наглядно?</div>
        <div className="text">Сортируем товар в Китае</div>
        <div className="items-box">
          {/* {["china1.jpg", "china2.jpg", "china3.jpg"].map((item) => (
            <EightItem {...{ text: item }} />
          ))} */}
          {china.length > 0 ? china.map((item) => <EightItem {...item} />) : ""}
        </div>
        <div className="text">Принимаем товар в Москве</div>
        <div className="items-box">
          {/* {["moscow1.jpg", "moscow2.jpg", "moscow3.jpg"].map((item) => (
            <EightItem {...{ text: item }} />
          ))} */}
          {moscow.length > 0
            ? moscow.map((item) => <EightItem {...item} />)
            : ""}
        </div>
        {video.length > 0 ? (
          <div className="eight-video-box">
            <div className="eight-video-wrapper">
              <video
                width={"100%"}
                height={"100%"}
                // height={window.screen.width > 600 ? 550 : 200}
                controls
                // style={{ borderRadius: 30 }}
                // className="video"
                poster="hands.png"
              >
                {/* <source src="ksvideo.mp4" type="video/mp4" />
              <source src="ksvideo.mov" type="video/mov" /> */}
                {video.map((item, index) => (
                  <source src={item.upload} type="video/mp4" />
                ))}
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Eight;
