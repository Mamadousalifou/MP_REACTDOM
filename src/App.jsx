import { NavLink } from "react-router-dom";
//import React from "react";
function App() {
  return (
    <>
      <h1>Home</h1>

      <NavLink to={"/apropos"}> A propos </NavLink>
      <NavLink to={"/blog"}> Visitez Bolg</NavLink>

      {/* <p>{title}</p> */}
    </>
  );
}

export default App;
