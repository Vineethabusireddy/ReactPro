
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am ha tag"),React.createElement("h2",{},"I am ha tag")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am hac tag"),React.createElement("h2",{},"I am hac tag")])
]);
const root1=ReactDOM.createRoot(document.getElementById("ro"))
root1.render(parent);

//to solve this it is very messy we have gix


















    const heading=React.createElement("h1",
    {
        id:"heading"

    },"hello from react");
    console.log("heading");
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
   