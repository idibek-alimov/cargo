import React, { useState } from "react";
import "./Selector.css";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
interface SelectorProp {
  options: string[];
  func: (text: string) => void;
  placeholder: string;
}
const Selector = ({ options, func, placeholder }: SelectorProp) => {
  const [show, setShow] = useState(false);
  const [chosen, setChosen] = useState<string>();
  return (
    <div
      className="selector-box"
      style={
        show
          ? {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              //   borderWidth: 1,
              borderColor: "#9999E0",
            }
          : {}
      }
    >
      <div
        className="selector-text"
        onClick={() => {
          setShow(!show);
        }}
      >
        {chosen ? chosen : <span style={{ color: "gray" }}>{placeholder}</span>}
        {show ? (
          <RiArrowDropUpLine size={40} className="icon" />
        ) : (
          <RiArrowDropDownLine size={40} className="icon" />
        )}
      </div>
      <div
        className="selector-options"
        style={
          show
            ? {
                display: "flex",
                borderColor: "#9999E0",
                borderTopColor: "transparent",
              }
            : {}
        }
      >
        {options.map((item) => (
          <div
            className="selector-item"
            onClick={() => {
              func(item);
              setChosen(item);
              setShow(!show);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;
