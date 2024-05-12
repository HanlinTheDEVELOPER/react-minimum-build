function Element(props) {
  return (
    <div>
      <h1>React Build!</h1>
      <ol>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ol>
      <hr />
    </div>
  );
}

ReactDOM.render(
  <Element content="A React Component" />,
  document.getElementById("app")
);
