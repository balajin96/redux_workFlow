import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";

//SELECTOR
const APPLE_LOGO = "APPLE_LOGO";
const GOOGLE_LOGO = "GOOGLE_LOGO";

// ACTIONS
export const appleAction = () => ({ type: APPLE_LOGO });
export const googleAction = () => ({ type: GOOGLE_LOGO });

// REDUCERS
const techReducer = (state, action) => {
  switch (action.type) {
    case APPLE_LOGO:
      return (state = "Iphone");
    case GOOGLE_LOGO:
      return (state = "Pixel");
    default:
      return (state = "no tech company");
  }
};

//STORE
let store = legacy_createStore(techReducer);
//store.subscribe(() => { console.log(store.getState()); });

/*
once we created store we can dispatch whereEver we want. 
//DISPATCH
store.dispatch(appleAction());
store.dispatch(googleAction()); 
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
