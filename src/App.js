import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appleAction, googleAction } from "./index";

const appstyle = {
  textAlign: "center",
  fontFamily: "Arial, Verdana, sans-serif"
};

function App() {
  const techies = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App" style={appstyle}>
      <h1>this is redux basics</h1>
      <p>{techies}</p>
      <button onClick={() => dispatch(appleAction())}>apple</button> &nbsp;
      <button onClick={() => dispatch(googleAction())}>google</button>
    </div>
  );
}

export default App;
