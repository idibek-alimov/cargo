import React, { useState } from "react";
import { MdPermPhoneMsg, MdCancel } from "react-icons/md";
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { AnimatePresence, motion as m } from "framer-motion";
import { BsWechat } from "react-icons/bs";
import { useGlobalContext } from "../../AppContext";
import { AppActionsKind } from "../../appDispatch";
import "./Phone.css";
const Phone = () => {
  const [show, setShow] = useState(false);
  const { clientDispatch } = useGlobalContext();
  return (
    <div className="phone-box">
      {show && (
        <div className="inner-box two">
          {/* <div onClick={() => setShow(false)}>contacts</div> */}
          <m.div
            className="inner-child"
            initial={{ x: 50, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 50, opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.4,
            }}
            style={{ width: "80%", marginTop: 10 }}
          >
            <div
              onClick={() => {
                clientDispatch({
                  type: AppActionsKind.SET_WE_CHAT_SHOW,
                  payload: "hello",
                });
              }}
            >
              <BsWechat className="message-icon" />
            </div>
            <div
              onClick={() =>
                (window.location.href = "https://wa.me/+79090994293")
              }
            >
              <IoLogoWhatsapp className="message-icon" />
            </div>
            <div onClick={() => (window.location.href = "https://t.me/Sijo03")}>
              <SiTelegram className="message-icon" />
            </div>
          </m.div>
          <m.div
            onClick={() => setShow(false)}
            className="phone-show-icon"
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
          >
            {/* <MdCancel size={50} color="orangered" /> */}
            <IoMdClose color="white" className="switch-icon" />
          </m.div>
        </div>
      )}{" "}
      {!show && (
        <div className="inner-box">
          <AnimatePresence>
            <m.div
              style={{ display: "flex", flexDirection: "column" }}
              initial={{ x: 50, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 50, opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.4,
              }}
            >
              <span>Есть вопрос ?</span>
              <span>Напишите нам !</span>
            </m.div>
          </AnimatePresence>
          <m.div
            onClick={() => setShow(true)}
            className="phone-show-icon"
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
          >
            <MdPermPhoneMsg color="white" className="switch-icon" />
          </m.div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Phone);
