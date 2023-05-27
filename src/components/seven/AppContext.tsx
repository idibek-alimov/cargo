import React, { createContext, useContext } from "react";
// import { ItemProp } from "./components/secondPoint/SecondPoint";
// import { data1 } from "./Data";

export type GlobalContent = {
  //data1: ItemProp[];
  //   data: ItemProp[];
  //   chosenProducts: ItemProp[];
  dispatch: React.Dispatch<any>;
  // cartProducts: ItemProp[];
  // func: (payload: ItemProp | number) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  //data1: data1,
  //data: data1,
  //chosenProducts: [],
  dispatch: () => null,
  // cartProducts: [],
  // func: (payload: ItemProp | number) => null,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
