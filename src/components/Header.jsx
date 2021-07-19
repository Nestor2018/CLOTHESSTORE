import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/components/Header.scss";
import iconCart from "../assets/icons/icon-cart.svg";
import iconUser from "../assets/icons/icon-user.svg";
import iconSearch from "../assets/icons/ionic-search.svg";
import NavBar from "./NavBar";
import MenuButton from "../components/MenuButton";
import { productsSearch } from "../store/productsSearch";
import { changeShow } from "../store/showModal";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleClick = () => {
    setOpen(!open);
  };

  const searchProduct = () => {
    dispatch(productsSearch(search));
  };

  return (
    <>
      <header className="Header">
        <MenuButton />
        <h2 className="Header-title">CLOTHESSTORE</h2>
        <div className="Header-container_search">
          <input
            type="text"
            id="search"
            onChange={(ev) => setSearch(ev.target.value)}
            className="Header-search"
            placeholder="Buscar aquí producto"
          />
          <button
            onClick={searchProduct}
            className="Header-button_icon bg-gray"
          >
            <img
              className="Header-search_icon Header-icon"
              src={iconSearch}
              height="30"
            />
          </button>
        </div>
        <button
          className="Header-button_icon"
          onClick={() => {
            dispatch(changeShow());
          }}
        >
          <img src={iconCart} className="Header-icon icon-cart" height="30" />
        </button>
        <img src={iconUser} className="Header-icon icon-user" height="30" />
        <button className="Header-button">Iniciar sesión</button>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
