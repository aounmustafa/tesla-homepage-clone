import React from "react";
import "./Content.css";
const Content = (props) => {
  return (
    <div className="bg" style={{ backgroundImage: `url(${props.bg})` }}>
      <h1>{props.title}</h1>
      <div className="text_onBg">
        <p>Order Online for touchless delivery</p>
        <button>Custome Order</button>
        <button>Exisiting Inventory</button>
      </div>
    </div>
  );
};

export default Content;
