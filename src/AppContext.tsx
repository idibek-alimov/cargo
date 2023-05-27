import React, { createContext, useContext } from "react";

export type GlobalContent = {
  //data1: ItemProp[];
  //   data: ItemProp[];
  //   chosenProducts: ItemProp[];
  clientDispatch: React.Dispatch<any>;
  // cartProducts: ItemProp[];
  // func: (payload: ItemProp | number) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  //data1: data1,
  //   data: data1,
  //   chosenProducts: [],
  clientDispatch: () => null,
  // cartProducts: [],
  // func: (payload: ItemProp | number) => null,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
