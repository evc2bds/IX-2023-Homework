import React from "react";
import Spinner from "./Spinner";

export default function Button({
  className,
  children,
  onClick,
  variant = "primary",
  loading = false,
  disabled = false,
  ...other
}) {
  return (
    <button
      //if you want to pass through any other unnamed props that may exist on this component
      {...other}
      style={{position: 'relative'}}
      onClick={onClick}
      disabled= { disabled || loading }
      className={'btn btn-' + variant + ' ' + className}
    >
      {children}

      {loading ? (
        <div
          style={{
            position: "absolute",
            right: "2px",
            top: "2px",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
