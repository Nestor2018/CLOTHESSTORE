import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/components/NavBar.scss";
import { changeShowMenu } from "../store/showMenu";

const NavBar = () => {
  let open = useSelector((state) => state.menu.show);
  const dispatch = useDispatch();
  const divStyle = {
    left: open ? "0" : "-100%",
  };

  return (
    <div style={divStyle} className="NavBar">
      <p
        onClick={() => {
          dispatch(changeShowMenu());
        }}
      >
        x
      </p>
      <a href="#">Hombre</a>
      <a href="#">Mujer</a>
      <a href="#">Junior</a>
      <a href="#">Niños</a>
      <a href="#">Accesorios</a>
      <a href="#">Ofertas</a>
    </div>
  );
};

export default NavBar;
