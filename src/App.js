import "./styles.css";
import App2 from "./App2x";

export default function App() {
  const jsonString =
    '{"name":"Alice","age":25,"relatives":["rel1","rel2","rel3","rel4","rel5"]}';
  const jsObject = JSON.parse(jsonString);
  return (
    <div className="App">
      <h1>Hello2 CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {jsObject.relatives.length}
      <div>
        {jsObject.relatives.map((name, index) => {
          return (
            <h4>
              {name} - {index}
            </h4>
          );
        })}
      </div>
      test
      <div>
        {Array.from({ length: 5 }, (value, key) => (
          <h4 key={key}>{key}</h4>
        ))}
      </div>
      <App2 />
    </div>
  );
}
