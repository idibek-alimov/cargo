import { Reducer } from "react";
import { SevenProp, emptySevenItem } from "./Seven";

export enum AppActionsKind {
  ADD_NAME = "ADD_NAME",
  ADD_NUMBER = "ADD_NUMBER",
  ADD_PRODUCT_TYPE = "ADD_PRODUCT_TYPE",
  ADD_PRODUCT_NAME = "ADD_PRODUCT_NAME",
  ADD_QUANTITY = "ADD_QUANTITY",
  ADD_MASS = "ADD_MASS",
  ADD_DELIVERY_METHOD = "ADD_DELIVERY_METHOD",
  ADD_ADDRESS = "ADD_ADDRESS",
  ADD_INSURANCE = "ADD_INSURANCE",
  ADD_COMMENT = "ADD_COMMENT",
  ADD_DELIVERY_PRICE = "ADD_DELIVERY_PRICE",
  ADD_DELIVERY_TIME = "ADD_DELIVERY_TIME",
}

export interface AppActionType {
  type: AppActionsKind;
  payload: string | number | boolean;
}

export const appReducer = (
  state: SevenProp = emptySevenItem,
  action: AppActionType
) => {
  const { type, payload } = action;
  switch (type) {
    case AppActionsKind.ADD_NAME:
      if (typeof payload === "string") {
        return { ...state, name: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_NUMBER:
      if (typeof payload === "string") {
        //let newState:SevenProp = {...state};
        //newState.number = payload;
        return { ...state, number: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_PRODUCT_TYPE:
      if (typeof payload === "string") {
        return { ...state, productType: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_PRODUCT_NAME:
      if (typeof payload === "string") {
        return { ...state, productName: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_QUANTITY:
      if (typeof payload === "number") {
        return { ...state, quantity: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_MASS:
      if (typeof payload === "number") {
        return { ...state, mass: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_DELIVERY_METHOD:
      if (typeof payload === "string") {
        return { ...state, deliveryMethod: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_ADDRESS:
      if (typeof payload === "string") {
        return { ...state, address: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_INSURANCE:
      if (typeof payload === "boolean") {
        return { ...state, insurance: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_COMMENT:
      if (typeof payload === "string") {
        return { ...state, comment: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_DELIVERY_PRICE:
      if (typeof payload === "number") {
        return { ...state, deliveryPrice: payload };
      } else {
        return state;
      }
    case AppActionsKind.ADD_DELIVERY_TIME:
      if (typeof payload === "number") {
        return { ...state, deliveryTime: payload };
      } else {
        return state;
      }
    default:
      return state;
  }
};
