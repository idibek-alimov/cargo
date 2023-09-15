import React, { useEffect, useReducer, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top/Top";
import First from "./components/first/First";
import Second from "./components/second/Second";
import Third from "./components/third/Third";
import Four from "./components/four/Four";
import Five from "./components/five/Five";
import Six from "./components/six/Six";
import Seven from "./components/seven/Seven";
import Eight from "./components/eight/Eight";
import Nine from "./components/nine/Nine";
import Ten from "./components/ten/Ten";
import Eleven, {
  ElevenForm,
  Prop,
  emptyClient,
} from "./components/eleven/Eleven";
import Twelve from "./components/twelve/Twelve";
import End from "./components/end/End";
import { AppActionsKind, appReducer } from "./appDispatch";
import { MyGlobalContext } from "./AppContext";
import { MdPermPhoneMsg, MdCancel } from "react-icons/md";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { BiChevronLeft } from "react-icons/bi";
import { AnimatePresence, motion as m } from "framer-motion";
import Phone from "./components/phone/Phone";
export interface extraClientProp extends Prop {
  show: boolean;
  we_chat_show: boolean;
  show_video: boolean;
  video_link: string;
}
let emptyExtraClient: extraClientProp = {
  ...emptyClient,
  show: false,
  we_chat_show: false,
  show_video: false,
  video_link: "",
};

function App() {
  const popRef = useRef<HTMLDivElement>(null); //<React.HTMLAttributes<HTMLDivElement>>(null);
  const weChatRef = useRef<HTMLDivElement>(null);
  const [client, clientDispatch] = useReducer(appReducer, emptyExtraClient);
  useEffect(() => {
    let a = document.querySelector(`.App`);
    if (a != null) {
      a.scrollTo(0, 0);
      window.scrollTo(0, 0);
    }
  }, []);
  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };
  // const Phone = () => {
  //   const [show, setShow] = useState(false);
  //   return (
  //     <div className="phone-box">
  //       {show && (
  //         <div className="inner-box two">
  //           {/* <div onClick={() => setShow(false)}>contacts</div> */}
  //           <m.div
  //             className="inner-child"
  //             initial={{ x: 50, opacity: 0, scale: 0.5 }}
  //             animate={{ x: 0, opacity: 1, scale: 1 }}
  //             exit={{ x: 50, opacity: 0, scale: 0.5 }}
  //             transition={{
  //               duration: 0.4,
  //             }}
  //           >
  //             <div
  //               onClick={() =>
  //                 (window.location.href = "https://wa.me/+78005553535")
  //               }
  //             >
  //               <IoLogoWhatsapp size={35} />
  //             </div>
  //             <div
  //               onClick={() => (window.location.href = "https://t.me/Sijo03")}
  //             >
  //               <SiTelegram size={35} />
  //             </div>
  //           </m.div>
  //           <div onClick={() => setShow(false)} className="phone-show-icon">
  //             {/* <MdCancel size={50} color="orangered" /> */}
  //             <IoMdClose color="white" size={30} />
  //           </div>
  //         </div>
  //       )}{" "}
  //       {!show && (
  //         <div className="inner-box">
  //           <AnimatePresence>
  //             <m.div
  //               style={{ display: "flex", flexDirection: "column" }}
  //               initial={{ x: 50, opacity: 0, scale: 0.5 }}
  //               animate={{ x: 0, opacity: 1, scale: 1 }}
  //               exit={{ x: 50, opacity: 0, scale: 0.5 }}
  //               transition={{
  //                 duration: 0.4,
  //               }}
  //             >
  //               <span>Есть вопрос ?</span>
  //               <span>Напишите нам !</span>
  //             </m.div>
  //           </AnimatePresence>
  //           <div onClick={() => setShow(true)} className="phone-show-icon">
  //             <MdPermPhoneMsg color="white" size={30} />
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  useEffect(() => {
    let handler = (event: TouchEvent | MouseEvent) => {
      if (
        weChatRef != null &&
        weChatRef.current != null &&
        !weChatRef.current.contains(event.target as Node)
      ) {
        clientDispatch({
          type: AppActionsKind.REMOVE_WE_CHAT_SHOW,
          payload: "hello",
        });
        clientDispatch({
          type: AppActionsKind.REMOVE_VIDEO,
          payload: "hello",
        });
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  useEffect(() => {
    let handler = (event: TouchEvent | MouseEvent) => {
      if (
        popRef != null &&
        popRef.current != null &&
        !popRef.current.contains(event.target as Node)
      ) {
        clientDispatch({
          type: AppActionsKind.REMOVE_SHOW,
          payload: "hello",
        });
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App">
      <MyGlobalContext.Provider value={{ clientDispatch: clientDispatch }}>
        <Top />
        <First />
        <Phone />
        <Second />
        <AnimatePresence>
          {client.we_chat_show && (
            <m.div
              className="popup-box we-chat-box"
              style={{ display: "flex" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
              }}
            >
              <div className="we-chat-wrapper" ref={weChatRef}>
                <span
                  className="close-box"
                  onClick={() =>
                    clientDispatch({
                      type: AppActionsKind.REMOVE_WE_CHAT_SHOW,
                      payload: "hello",
                    })
                  }
                >
                  <MdCancel
                    // size={40}
                    size={window.screen.width < 600 ? 25 : 40}
                    color="orangered"
                    className="we-chat-close-icon"
                  />
                </span>
                <span className="we-chat-text">Отсканируйте для WeChat</span>
                <img
                  src="wechatcargo.png"
                  alt="hello"
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {client.show_video && (
            <m.div
              className="popup-box video-box"
              style={{ display: "flex" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
              }}
            >
              <div className="video-wrapper" ref={weChatRef}>
                <span
                  className="close-box"
                  onClick={() =>
                    clientDispatch({
                      type: AppActionsKind.REMOVE_VIDEO,
                      payload: "hello",
                    })
                  }
                >
                  {/* <MdCancel
                    size={window.screen.width < 600 ? 25 : 40}
                    color="orangered"
                    className="we-chat-close-icon"
                  /> */}
                  <BiChevronLeft
                    color="orangered"
                    size={window.screen.width < 600 ? 30 : 50}
                  />
                </span>
                <video
                  // width={"100%"}
                  // height={"100%"}
                  controls
                  className="video-itself"
                  autoPlay
                >
                  <source src={client.video_link} type="video/mp4" />
                </video>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {client.show && (
            <m.div
              // ref={popRef}
              className="popup-box"
              style={{ display: "flex" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.4,
              }}
            >
              <div className="popup-wrapper" ref={popRef}>
                <span
                  className="close-box"
                  onClick={() =>
                    clientDispatch({
                      type: AppActionsKind.REMOVE_SHOW,
                      payload: "hello",
                    })
                  }
                >
                  <MdCancel className="close-icon" color="white" />
                </span>
                <ElevenForm
                  deliveryMethod={
                    client && client.deliveryMethod != ""
                      ? client.deliveryMethod
                      : null
                  }
                />
              </div>
            </m.div>
          )}
        </AnimatePresence>
        <Third />

        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
        <Ten />
        <Eleven />
        <Twelve />
        <End />
      </MyGlobalContext.Provider>
    </div>
  );
}

export default App;
