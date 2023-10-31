import React from "react";
import { useDrag } from "react-dnd";

const DraggableOption = ({ item }) => {
  const [, ref] = useDrag({
    type: "OPTION", // Define the type of the draggable item
    item: { id: item.id }, // Pass data related to the item being dragged
  });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "lightgray",
        padding: "8px",
        cursor: "move",
      }}
    >
      {item.name}
    </div>
  );
};

export default DraggableOption;
