import React from "react";
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import "../styles/components/ProductShoppingCart.scss";
import { remove, add, deleteState } from "../store/productsCart";

const ProductShoppingCart = ({ product, repeated }) => {
  console.log(product, "que llega");
  let dispatch = useDispatch();
  return (
    <div className="grid-products-shopping">
      <div className="ProductShoppingCart-info">
        <img src={product.thumbnail} />
        <div>
          <p className="ProductShoppingCart-title">{product.title}</p>

          {product.prices.prices.length > 1 ? (
            <p className="ProductShoppingCart-units">
              ${product.prices.prices[1].amount} c/u
            </p>
          ) : (
            <p className="ProductShoppingCart-units">
              ${product.prices.prices[0].amount} c/u
            </p>
          )}
        </div>
      </div>
      <p className="text-center ProductShoppingCart-container-buttons">
        <button
          onClick={() => {
            repeated[product.id] > "1" ? dispatch(remove(product.id)) : null;
          }}
          className={`ProductShoppingCart-button remove ${
            repeated[product.id] == "1" ? "c-gray" : "c-green"
          }`}
        >
          <FaMinusCircle />
        </button>
        <span className="ProductShoppingCart-value_cuantity">
          {repeated[product.id]}
        </span>
        <button
          onClick={() => {
            dispatch(add(product));
          }}
          className="ProductShoppingCart-button add"
        >
          <FaPlusCircle />
        </button>
      </p>

      {product.prices.prices.length > 1 ? (
        <p className="text-center ProductShoppingCart-price">
          <span>$</span>{" "}
          {product.prices.prices[1].amount * repeated[product.id]}
        </p>
      ) : (
        <p className="text-center ProductShoppingCart-price">
          <span>$</span>{" "}
          {product.prices.prices[0].amount * repeated[product.id]}
        </p>
      )}

      <button
        onClick={() => {
          dispatch(deleteState(product.id));
        }}
        className="ProductShoppingCart-button delete"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default ProductShoppingCart;
