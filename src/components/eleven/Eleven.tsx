import React, { useEffect, useState } from "react";
import "./Eleven.css";
import axios from "axios";
import { useGlobalContext } from "../../AppContext";
import { AppActionsKind } from "../../appDispatch";

export interface ElevenFormProp {
  name: string;
  number: string;
  comment: string;
  deliveryMethod: string | null;
}
export let emptyClient: ElevenFormProp = {
  name: "",
  number: "",
  comment: "",
  deliveryMethod: "",
};
export interface Prop {
  deliveryMethod: string | null;
}
export const ElevenForm = ({ deliveryMethod }: Prop) => {
  const [client, setClient] = useState<ElevenFormProp>(emptyClient);
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!sent) {
      if (client.name.length > 0 && client.number.length >= 10) {
        axios
          .post("http://pop.kscargo.ru/api/client/", {
            ...client,
            deliveryMethod: deliveryMethod,
          })
          .then((res) => {
            alert("Ваш запрос принят");
            setClient(emptyClient);
            setSent(true);
            clientDispatch({
              type: AppActionsKind.REMOVE_SHOW,
              payload: "hello",
            });
          })
          .catch((err) => alert("что то пошло не так попробуйте еще раз"));
      } else {
        alert("Пожалуйста правильно заполните все поле");
      }
    } else {
      setClient(emptyClient);
    }
  };
  const { clientDispatch } = useGlobalContext();
  return (
    <>
      {" "}
      <form className="eleven-wrapper" onSubmit={handleSubmit}>
        <span>
          {deliveryMethod || deliveryMethod != null ? (
            <div className="eleven-absolute-box">
              ВЫ ВЫБРАЛИ <span>{deliveryMethod}</span>
              <div className="text absolute-bottom">
                Напишите нам и получите бесплатную консультацию.
              </div>
            </div>
          ) : (
            <div className="text jovid-text">
              Напишите нам и получите бесплатную консультацию.
            </div>
          )}
        </span>
        <div className="text-mini">
          Напишите нам и получите бесплатную консультацию.
        </div>
        <div className="inputs">
          <input
            placeholder="Имя"
            value={client.name}
            onChange={(event) => {
              // let placeholder: ElevenFormProp = client;
              // placeholder.name = event.target.value;
              setClient({ ...client, name: event.target.value });
            }}
            //value={client.name}
          />
          <input
            placeholder="Номер"
            value={client.number}
            onChange={(event) => {
              // let placeholder: ElevenFormProp = client;
              // placeholder.number = event.target.value;
              setClient({ ...client, number: event.target.value });
            }}
          />
        </div>
        <div
          style={{ overflow: "hidden", paddingRight: 5, width: "100%" }}
          className="text-area-box"
        >
          <textarea
            value={client.comment}
            placeholder="Комментарии"
            //value={client.comment}
            onChange={(event) => {
              // let placeholder: ElevenFormProp = client;
              // placeholder.comment = event.target.value;
              setClient({ ...client, comment: event.target.value });
            }}
          />
        </div>
        <div className="button-box">
          <button
            type="submit"
            // onClick={() => {
            //   clientDispatch({
            //     type: AppActionsKind.REMOVE_SHOW,
            //     payload: "hello",
            //   });
            // }}
          >
            Отправить
          </button>
        </div>
      </form>
    </>
  );
};

const Eleven = () => {
  return (
    <div className="eleven-box">
      <div id="eleven"></div>
      <div className="eleven-wrapper">
        <div className="top">
          <div className="header">Ещё не определились с товаром?</div>
          {/* <div className="text">
            Напишите нам свои данные и комментарии о своих пожеланиях по товару,
            и мы
            <br /> проконсультируем вас в ближайшее время.
          </div> */}
        </div>
        <ElevenForm deliveryMethod={null} />
      </div>
    </div>
  );
};

export default Eleven;
