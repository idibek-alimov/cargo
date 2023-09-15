import { Reducer } from "react";
//import { SevenProp, emptySevenItem } from "./Seven";
import { ElevenFormProp, emptyClient } from "./components/eleven/Eleven";
import { extraClientProp } from "./App";

export enum AppActionsKind {
  ADD_DELIVERY_METHOD = "ADD_DELIVERY_METHOD",
  REMOVE_SHOW = "REMOVE_SHOW",
  SET_SHOW = "SET_SHOW",
  SET_WE_CHAT_SHOW = "SET_WE_CHAT_SHOW",
  REMOVE_WE_CHAT_SHOW = "REMOVE_WE_CHAT_SHOW",
  SHOW_VIDEO = "SHOW_VIDEO",
  REMOVE_VIDEO = "REMOVE_VIDEO",
}

export interface AppActionType {
  type: AppActionsKind;
  payload: string;
}

export const appReducer = (state: extraClientProp, action: AppActionType) => {
  const { type, payload } = action;
  switch (type) {
    case AppActionsKind.ADD_DELIVERY_METHOD:
      if (typeof payload === "string") {
        // console.log(state);
        // console.log(payload);
        return { ...state, deliveryMethod: payload, show: true };
      } else {
        return state;
      }
    case AppActionsKind.SHOW_VIDEO:
      if (typeof payload === "string") {
        return { ...state, show_video: true, video_link: payload };
      } else {
        return state;
      }
    case AppActionsKind.REMOVE_VIDEO:
      return { ...state, show_video: false, video_link: "" };
    case AppActionsKind.REMOVE_SHOW:
      return { ...state, show: false };

    case AppActionsKind.SET_SHOW:
      return { ...state, show: true, deliveryMethod: null };

    case AppActionsKind.SET_WE_CHAT_SHOW:
      return { ...state, we_chat_show: true };
    case AppActionsKind.REMOVE_WE_CHAT_SHOW:
      return { ...state, we_chat_show: false };
    default:
      return state;
  }
};
