import React from "react";
import "./Ten.css";
const Ten = () => {
  return (
    <div className="ten-box">
      <div id="ten"></div>
      <div className="ten-wrapper">
        <div className="left">
          <img src="ten1.svg" />
          {/* <img
            // class="thumb"
            data-pin-no-hover="true"
            //        fetchpriority="high"
            src="https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg"
            srcSet="https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=360&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 360w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=740&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 740w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=826&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 826w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=900&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 900w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=996&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 996w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=1060&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 1060w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=1380&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 1380w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=1480&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 1480w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=1800&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 1800w, https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-on-monitor-screen-and-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=2000&amp;t=st=1685145009~exp=1685145609~hmac=c0b56e4415e10b839c42b0954213d10593be4b35106d51df3094619e32b89ef9 2000w"
            sizes="(max-width: 479px) 100vw, (min-aspect-ratio: 626/626) calc((100vh - 184px) * 1.000), (max-width: 1095px) calc(100vw - 40px), calc(100vw - 400px)"
            // style="max-width: calc((100vh - 184px) * 1.000)"

            // width="626"
            // height="626"
            style={{ backgroundColor: "yellow" }}
            alt="Доставка онлайн-заказов, отгрузка. корзина интернет-магазина, картонные коробки, покупатель с ноутбуком. транспортная накладная на экране монитора и посылке. вектор изолированных иллюстрация метафоры концепции."
            // onerror="this.onerror=null;ga('send', 'event', 'broken_image', 'detail', '335657_12083598');"
          /> */}
        </div>
        <div className="right">
          <div className="header">Присоединяйтесь к нам!</div>
          <div className="text">И вы сможете:</div>
          <div className="box">Покупать оптом выгоднее</div>
          <div className="box">Улучшить Unit-экономику</div>
          <div className="box">Зарабатывать в рознице больше</div>
          <div className="box">Продавать на маркетплейсах маштабнее</div>
        </div>
      </div>
    </div>
  );
};

export default Ten;
