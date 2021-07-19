import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/components/MenuButtom.scss";
import { changeShowMenu } from "../store/showMenu";

function MenuButton() {
  const dispatch = useDispatch();
  let open = useSelector((state) => state.menu.show);
  return (
    <button
      onClick={() => {
        dispatch(changeShowMenu());
      }}
      className="MenuButton"
    >
      <svg viewBox="0 0 100 80" width="30" height="30" fill="#494D54">
        <rect width="90" height="10" />
        <rect y="30" width="80" height="10" />
        <rect y="60" width="70" height="10" />
      </svg>
    </button>
  );
}

export default MenuButton;
