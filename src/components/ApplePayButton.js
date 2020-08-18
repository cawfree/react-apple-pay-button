
import React from "react";
import PropTypes from "prop-types";

import "../css/ApplePayButton.css";

import { ApplePayIcon } from ".";

/* eslint-disable no-useless-computed-key */
const ApplePayButton = ({style, title, theme, ["aria-label"]: ariaLabel, children, ...extraProps}) => {
  return (
    <button
      className={`apple-pay-button apple-pay-button-${theme}`}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...extraProps}
      aria-label={ariaLabel}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "HelveticaNeue-Medium",
            fontSize: 17,
            paddingBottom: 1.7,
            paddingRight: 6,
            letterSpacing: 0,
            color: theme === "light" ? "black" : "white",
          }}
        >
          {children}
        </span>
        <ApplePayIcon
          style={{
            width: 32 * 1.6,
            height: 13.15 * 1.6,
          }}
          fill={theme === "light" ? "black" : "white"}
        />
      </div>
    </button>
  );
};
/* eslint-enable no-useless-computed-key */

ApplePayButton.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  "aria-label": PropTypes.string,
};

ApplePayButton.defaultProps = {
  theme: "dark",
  "aria-label": "Pay with Apple Pay",
  children: "Pay with",
};

export default ApplePayButton;
