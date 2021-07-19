import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

import Header from "../components/Header";
import CarouselHero from "../components/CarouselHero";
import Categories from "../components/Categories";
import ListProducts from "../components/ListProducts";
import Footer from "../components/Footer";
import productsMock from "../mocks/productsMock";
import ShoppingCart from "../components/ShoppingCart";
import "../styles/screens/Home.scss";

const Home = () => {
  const products = productsMock.products;
  const productsSearch = useSelector((state) => state.productsSearch.products);
  const show = useSelector((state) => state.modal.show);
  useEffect(() => {
    console.log("se ejecuta");
  }, products);
  return (
    <div>
      {productsSearch ? (
        productsSearch.length > 0 ? (
          <div>
            <Header />
            <ListProducts products={productsSearch} />
            <Footer />
            <Modal show={show}>
              <ShoppingCart />
            </Modal>
          </div>
        ) : (
          <div>
            <Header />
            <CarouselHero />
            <Categories />
            <h2 className="Home-title">PRODUCTOS MÁS BUSCADOS</h2>
            <ListProducts products={products} />
            <Footer />
            <Modal show={show}>
              <ShoppingCart />
            </Modal>
          </div>
        )
      ) : (
        <div>
          <Header />
          <CarouselHero />
          <Categories />
          <h2 className="Home-title">PRODUCTOS MÁS BUSCADOS</h2>
          <ListProducts products={products} />
          <Footer />
          <Modal show={show}>
            <ShoppingCart />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Home;
