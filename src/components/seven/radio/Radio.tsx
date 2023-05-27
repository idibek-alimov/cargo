import React, { useState } from "react";
import "./Radio.css";
interface RadioProp {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Radio = ({ active, setActive }: RadioProp) => {
  //const [active, setActive] = useState(false);
  return (
    // <div className="radio-box">
    <div
      className="box"
      style={{
        backgroundColor: active ? "orangered" : "",
        transition: "all 0.9s ease",
      }}
      onClick={() => setActive(!active)}
    >
      <div
        className="item"
        onClick={() => setActive(!active)}
        style={{
          transform: active ? "translateX(19px)" : "",
          transition: "all 0.9s ease",
        }}
      ></div>
    </div>
    // </div>
  );
};

export default Radio;
