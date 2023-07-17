/**
 * * Using vanilla react to create a basic web page
 */

// this heading variable holds object
const heading = React.createElement(
  "h1",
  { id: "h1" },
  "Hello World from React"
);

//the below code is to create a nested html structure using react

const parent = React.createElement(
  "div",
  { id: "div1" },
  //Inorder to create siblings you can use array
  React.createElement("div", { id: "div2" }, [
    React.createElement("h1", { id: "h11" }, "nested div from react"),
    React.createElement("h2", { id: "h12" }, "nested div from react"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
// root.render();
