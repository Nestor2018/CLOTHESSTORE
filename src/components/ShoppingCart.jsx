import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronLeft } from "react-icons/fa";

import "../styles/components/ShoppingCart.scss";
import { changeShow } from "../store/showModal";
import CardProduct from "./CardProduct";
import ProductShoppingCart from "./ProductShoppingCart";
import { numberItems } from "../store/productsCart";

const ShoppingCart = () => {
  let dispatch = useDispatch();
  let productsStore = useSelector((state) => state.productsCart.productsCart);
  let items = useSelector((state) => state.productsCart.items);

  console.log(productsStore, "productsStore");

  const setObj = new Set();

  let products = productsStore.reduce((acc, prod) => {
    if (!setObj.has(prod.id)) {
      setObj.add(prod.id, prod);
      acc.push(prod);
    }
    return acc;
  }, []);

  var repeated = {};

  productsStore.forEach((prod) => {
    repeated[prod.id] = (repeated[prod.id] || 0) + 1;
  });
  dispatch(numberItems(repeated));
  return (
    <div className="ShoppingCart-contaniner">
      <p className="ShoppingCart-back">
        <button
          onClick={() => {
            dispatch(changeShow());
          }}
        >
          <FaChevronLeft />
        </button>
        volver a la tienda
      </p>
      <div className="ShoppingCart-header">
        <h2>Carrito de compras</h2>
        <p className="text-center">
          <span>{items}</span> {items > 1 ? "items" : "item"}
        </p>
      </div>
      <div className="ShoppingCart-grid_products">
        <p>item</p>
        <p className="text-center">cantidad</p>
        <p className="text-center">Precio</p>
        <p></p>
      </div>
      {products.map((item) => (
        <ProductShoppingCart key={item.id} product={item} repeated={repeated} />
      ))}
    </div>
  );
};

export default ShoppingCart;
