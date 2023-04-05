import React from "react";
import "./Home.scss";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__slider">
          <Carousel
            autoPlay
            interval={2000}
            infiniteLoop
            stopOnHover={false}
            showArrows={false}
          >
            <div>
              <img
                src="https://m.media-amazon.com/images/I/61um60VOoeL._SX3000_.jpg"
                alt=""
                className="home__image"
              />
            </div>
            <div>
              <img
                src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
                alt=""
                className="home__image"
              />
            </div>
            <div>
              <img src="/bgImg.jpg" alt="" className="home__image" />
            </div>
          </Carousel>
        </div>
        <div className="home__row__container">
          <div className="home__row">
            <Product
              id="123456"
              title="The Lean Startup: How Constant
            Innovation Creates Radically Successful
            Businesses Paperback"
              rating={3}
              price={19.99}
              image="/img1.webp"
            />
            <Product
              id="490342"
              title="Kenwood kMix Stand Mixer for
            Baking, Stylish Kitchen Mixer, 5 Litre
            Glass Bowl"
              price={239.0}
              rating={4}
              image="/img5.webp"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC4IRGIOSSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={5}
              image="/img2.webp"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="/img3.webp"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 12868) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="/img4.webp"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC4IRGIOSSUXEN 49' Curved
            LED Gaming Momitor - Super Ultra Wide 
            Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="/img6.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
