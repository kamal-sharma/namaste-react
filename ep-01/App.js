/*<div id="parent">
  <div id="child1">
    <p>Paragrah 1</p>
    <h1>Child 1 heading</h1>
  </div>

  <div id="child2">
    <p>Paragrah 2</p>
    <h2>Child 2 heading</h2>
  </div>
</div>*/

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("p", {}, "Paragraph 1"), React.createElement("h1", {}, "Child 1 heading")]), React.createElement("div", { id: "child2" }, [React.createElement("p", {}, "Paragraph 2"), React.createElement("h2", {}, "Child 2 heading")])])

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
