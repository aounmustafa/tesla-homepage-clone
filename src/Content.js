import React from "react";
import "./Content.css";
const Content = (props) => {
  return (
    <div className="bg" style={{ backgroundImage: `url(${props.bg})` }}>
      <div className="text_onBg">
        <h2>{props.title}</h2>
        <p>Order Online for touchless delivery</p>
      </div>

      {props.acc ? (
        <div>
          <button className="button3">Shop Now</button>
        </div>
      ) : (
        <div className="btns">
          <button className="button1">CUSTOM ORDER</button>
          <button className="button2">EXISITING INVENTORY</button>
        </div>
      )}
    </div>
  );
};

export default Content;
