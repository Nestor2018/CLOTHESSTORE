import React from "react";
import { useDispatch } from "react-redux";

import "../styles/components/CardProduct.scss";
import iconCart from "../assets/icons/icon-cart.svg";
import { add } from "../store/productsCart.js";

const CardProduct = ({ product }) => {
  let dispatch = useDispatch();
  return (
    <div className="CardProduct">
      <div className="CardProduct-container_img">
        {product.prices.prices.length > 1 ? (
          product.prices.prices[1].metadata.campaign_discount_percentage ? (
            <div className="CardProduct-percentage_discount">
              -{product.prices.prices[1].metadata.campaign_discount_percentage}%
            </div>
          ) : null
        ) : null}
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="CardProduct-info">
        <p className="CardProduct-title">{product.title}</p>
        {product.prices.prices.length > 1 ? (
          <div className="CardProduct-container_price">
            <p className="CardProduct-amount">
              ${product.prices.prices[1].amount}
            </p>
            <p className="CardProduct-discount">
              ${product.prices.prices[1].regular_amount}
            </p>
          </div>
        ) : (
          <div className="CardProduct-container_price">
            <p className="CardProduct-amount">
              ${product.prices.prices[0].amount}
            </p>
          </div>
        )}
        <button
          onClick={() => {
            dispatch(add(product));
          }}
          className="CardProduct-button"
        >
          <p>Agregar al carrito</p>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
