import React from "react";
import "./Checkout.scss";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="/ad.jpg" alt="" />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket?.map((item) => {
            return (
              <CheckoutProduct
                id={item?.id}
                image={item?.image}
                title={item?.title}
                rating={item?.rating}
                price={item?.price}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
