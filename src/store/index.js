import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsSearchSlice from "./productsSearch";
import modalSlice from "./showModal";
import menuSlice from "./showMenu";
import productsCartSlice from "./productsCart";

const reducer = combineReducers({
  productsSearch: productsSearchSlice,
  productsCart: productsCartSlice,
  modal: modalSlice,
  menu: menuSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  //almacena las propiedades de state que queremos guardar
  whitelist: ["productsCart"],
  //almacena las propiedades del estate que no queremos guardar
  //blacklist: ["productsSearch"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
