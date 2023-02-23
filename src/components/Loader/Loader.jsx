import React from "react";
import "./loader.scss";

const Loader = (props) => {
  return (
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
