// components/Product.js
import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import Image from "next/image";
import HoverImage from "./HoverImage";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="relative flex items-center justify-center w-full h-full">
        <HoverImage
          imageSrc={image}
          hoverText="View Details"
          size="w-52 h-52"
        />
      </div>
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://m.media-amazon.com/images/G/37/marketing/prime/prime_landing_logo._CB451933429_.png"
            alt=""
          />
          <p className="text-xs text-gray-500 mb-1">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button"> Add to Basket</button>
    </div>
  );
}

export default Product;
