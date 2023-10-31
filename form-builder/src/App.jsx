import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../src/App.css";
import { sidebar_content } from "./helpers/sidebar";
import DraggableOption from "./components/draggable_option";
import DropZone from "./components/drop_zone";

function App() {
  const [sidebar_data, set_sidebar_data] = useState([]);

  useEffect(() => {
    set_sidebar_data(sidebar_content);
  }, []);

  const openNewWindow = () => {
    const newWindow = window.open("", "_blank", "width=400, height=400");

    newWindow.document.write("<h1>New Window</h1>");
    newWindow.document.write(
      '<button onclick="layoutButtonClick()">Layout</button>'
    );

    newWindow.layoutButtonClick = () => {
      alert("Layout button clicked!");
    };
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App" style={{ display: "flex" }}>
        <div className="sidebar">
          {sidebar_data?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "1px 0px 4px 10px",
                }}
              >
                <DraggableOption item={item} key={index} />
              </div>
            );
          })}
          <button onClick={openNewWindow}>Open New Window</button>
        </div>
        <div className="layout">
          <DropZone />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
