import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";

const NUM = 5;

function App() {
  const string = "Infinite possibilities";
  const [count, setCount] = React.useState(NUM * -1);
  const [mouseX, setMouseX] = React.useState(null);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((p) => (p >= string.length - 1 + NUM ? NUM * -1 : p + 1));
    }, 60);
    return () => clearInterval(id);
  }, [string.length]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    setMouseX(e.clientX - bounds.left);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
  };

  const getPosition = (count, index) => {
    if (count === index) return "x-0";
    if (count === index - 1 || count === index + 1) return "x-1";
    if (count === index - 2 || count === index + 2) return "x-2";
    if (count === index - 3 || count === index + 3) return "x-3";
    return "";
  };

  return (
    <div
      className="container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ userSelect: "none", cursor: "default" }}
    >
      <div style={{ display: "flex" }}>
        {string.split("").map((letter, index) => {
          // calculate hover intensity if mouseX is present
          let hoverClass = "";
          if (mouseX !== null) {
            const letterWidth = containerRef.current.offsetWidth / string.length;
            const letterCenter = letterWidth * index + letterWidth / 2;
            const distance = Math.abs(mouseX - letterCenter);
            const maxDist = 100;
            const intensity = Math.max(0, 1 - distance / maxDist);
            if (intensity > 0.5) hoverClass = "hover-near";
            else if (intensity > 0) hoverClass = "hover-far";
          }

          return (
            <div
              key={index}
              className={`x ${getPosition(count, index)} ${hoverClass}`}
              style={{ transition: "all 0.3s ease" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        {"https://github.com/mona-sans".split("").map((letter, index) => (
          <div key={index} className="x hover" style={{ transition: "all 0.3s ease" }}>
            {letter === " " ? "\u00A0" : letter}
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

