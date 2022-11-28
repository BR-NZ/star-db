import React from "react";
import "./error-indicator.css";
// Трюк для WEBPACK - он поместит в icon значение ссылки url
import icon from "./death-star-red.png"

const ErrorIndicator = () => {
  return (
      <div className="error-indicator">
          <img src={icon} alt="Error has occur"/>
        <span className="boom">BOOM!</span>
        <span>
          something went terribly wrong
        </span>
        <span>
          (but we already sent droids to fix it)
        </span>
      </div>
  );
}

export default ErrorIndicator;
