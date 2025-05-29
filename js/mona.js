import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const NUM = 5;

function App() {
  const string = "Infinite possibilities";
  const [count, setCount] = React.useState(NUM * -1);

  useInterval(() => {
    setCount((p) => {
      if (p >= string.length - 1 + NUM) {
        return NUM * -1;
      }
      return p + 1;
    });
  }, 60);

  const getPosition = (count, index) => {
    if (count === index) return "x-0";
    if (count === index - 1 || count === index + 1) return "x-1";
    if (count === index - 2 || count === index + 2) return "x-2";
    if (count === index - 3 || count === index + 3) return "x-3";
    return "";
  };

  return (
    <div className="container">
      <div>
        {string.split("").map((letter, index) => (
          <div className={`${getPosition(count, index)} x`}>
            {letter === " " ? "\u00A0" : letter}
          </div>
        ))}
      </div>
      <div>
        {"https://github.com/mona-sans".split("").map((letter, index) => (
          <div className={`x hover`}>{letter === " " ? "\u00A0" : letter}</div>
        ))}
      </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = React.useRef(null);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

ReactDOM.render(<App />, document.getElementById("root"));

