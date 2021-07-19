import React from "react";

import CardProduct from "../components/CardProduct";
import "../styles/components/ListProducts.scss";

const ListPorducts = ({ products }) => {
  return (
    <div className="ListPorducts">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListPorducts;
