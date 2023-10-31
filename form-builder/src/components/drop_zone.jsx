import React from "react";
import { useDrop } from "react-dnd";

const DropZone = () => {
  const [{ canDrop, isOver, droppedItem }, drop] = useDrop({
    accept: "OPTION", // Define the accepted type (must match DraggableOption type)
    drop: (item, monitor) => {
      // Handle the drop event here
      const droppedItem = item.id;
      // Do something with the dropped item, e.g., add it to the layout
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      droppedItem: monitor.getItem(),
    }),
  });

  const isActive = canDrop && isOver;
  console.log("droppedItem.id", droppedItem?.id);
  return (
    <div
      ref={drop}
      style={{
        width: "100%",
        height: "100%",
        border: `2px ${isActive ? "dashed" : "solid"} gray`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isActive ? "Release to drop" : "Drag an option here"}
      {droppedItem ? <div>{droppedItem.id}</div> : null}
    </div>
  );
};

export default DropZone;
