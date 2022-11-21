import "./App.css";

function AppJSX() {
  const name = "화경";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello ${name}`}</h1>
      <h2>Hi</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
