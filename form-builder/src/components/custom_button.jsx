import React from "react";

const CustomButton = ({ item }) => {
  console.log(item, "item");
  return (
    <h5
      style={{
        color: "white",
        width: "auto",
        padding: "2px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
    >
      {item.icon}
      {item.name}
    </h5>
  );
};

export default CustomButton;
