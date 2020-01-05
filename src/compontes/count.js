import React from "react";

function Count({ count, inc, dec, reset }) {
  return (
    <div className="container">
      <div className="interContainer">
        <span>{count}</span>
      </div>
      <div className="btnContainer">
        <button className="btnPlus" onClick={inc}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="btnSync" onClick={reset}>
          <i className="fas fa-sync-alt"></i>
        </button>
        <button className="btnMinus" onClick={dec}>
          <i className="fas fa-minus"></i>
        </button>
      </div>
    </div>
  );
}
export default Count;
