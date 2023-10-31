export const sidebar_content = [
  {
    id: generateUUID(),
    name: "Layout",
  },
  {
    id: generateUUID(),
    name: "Button",
  },
  {
    id: generateUUID(),
    name: "Radio",
  },
  {
    id: generateUUID(),
    name: "Textbox",
  },
  {
    id: generateUUID(),
    name: "Label",
  },
  {
    id: generateUUID(),
    name: "Table",
  },
  {
    id: generateUUID(),
    name: "Image",
  },
  {
    id: generateUUID(),
    name: "Navigation Link",
  },
];

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
