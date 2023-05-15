import { useEffect, useRef, useState } from "react";

function App() {
  const heater1 = useRef(null);
  const heater2 = useRef(null);
  const heater3 = useRef(null);
  const heater4 = useRef(null);
  const heater6 = useRef(null);
  const kickHat = useRef(null);
  const rp4Hat = useRef(null);
  const cevH2 = useRef(null);
  const dscOh = useRef(null);

  const [display, setDisplay] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  function handleKeyDown(e) {
    // console.log(heater1.current.getAttribute("data-name"));

    switch (e.key) {
      case "q":
      case "Q":
        heater1.current.play();
        setDisplay(heater1.current.getAttribute("data-name"));
        break;
      case "w":
      case "W":
        heater2.current.play();
        setDisplay(heater2.current.getAttribute("data-name"));
        break;
      case "e":
      case "E":
        heater3.current.play();
        setDisplay(heater3.current.getAttribute("data-name"));
        break;
      case "a":
      case "A":
        heater4.current.play();
        setDisplay(heater2.current.getAttribute("data-name"));
        break;
      case "s":
      case "S":
        heater6.current.play();
        setDisplay(heater6.current.getAttribute("data-name"));
        break;
      case "d":
      case "D":
        kickHat.current.play();
        setDisplay(kickHat.current.getAttribute("data-name"));
        break;
      case "z":
      case "Z":
        rp4Hat.current.play();
        setDisplay(rp4Hat.current.getAttribute("data-name"));
        break;
      case "x":
      case "X":
        cevH2.current.play();
        setDisplay(cevH2.current.getAttribute("data-name"));
        break;
      case "c":
      case "C":
        dscOh.current.play();
        setDisplay(dscOh.current.getAttribute("data-name"));
        break;
      default:
        break;
    }
  }

  function handleClick(ref) {
    setDisplay(ref.getAttribute("data-name"));
    ref.play();
  }

  return (
    <main id="drum-machine">
      <div id="display">{display}</div>
      <div className="botones">
        <button
          onClick={() => handleClick(heater1.current)}
          className="drum-pad"
          id="heater1"
        >
          Q
          <audio
            data-name="Heater uno"
            preload="auto"
            ref={heater1}
            className="clip"
            id="Q"
            src="/Heater-1.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(heater2.current)}
          className="drum-pad"
          id="heater2"
        >
          W
          <audio
            data-name="Heater dos"
            preload="auto"
            ref={heater2}
            className="clip"
            id="W"
            src="/Heater-2.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(heater3.current)}
          className="drum-pad"
          id="heater3"
        >
          E
          <audio
            data-name="Heater tres"
            preload="auto"
            ref={heater3}
            className="clip"
            id="E"
            src="/Heater-3.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(heater4.current)}
          className="drum-pad"
          id="heater4"
        >
          A
          <audio
            data-name="Heater cuatro"
            preload="auto"
            ref={heater4}
            className="clip"
            id="A"
            src="/Heater-4_1.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(heater6.current)}
          className="drum-pad"
          id="heater6"
        >
          S
          <audio
            data-name="Heater seis"
            preload="auto"
            ref={heater6}
            className="clip"
            id="S"
            src="/Heater-6.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(kickHat.current)}
          className="drum-pad"
          id="kickHat"
        >
          D
          <audio
            data-name="Kick Hat"
            preload="auto"
            ref={kickHat}
            className="clip"
            id="D"
            src="/Kick_n_Hat.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(rp4Hat.current)}
          className="drum-pad"
          id="rp4Hat"
        >
          Z
          <audio
            data-name="Share"
            preload="auto"
            ref={rp4Hat}
            className="clip"
            id="Z"
            src="/RP4_KICK_1.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(cevH2.current)}
          className="drum-pad"
          id="cevH2"
        >
          X
          <audio
            data-name="Brumba Rumba"
            preload="auto"
            ref={cevH2}
            className="clip"
            id="X"
            src="/Cev_H2.mp3"
          ></audio>
        </button>

        <button
          onClick={() => handleClick(dscOh.current)}
          className="drum-pad"
          id="dscOh"
        >
          C
          <audio
            data-name="Bass"
            preload="auto"
            ref={dscOh}
            className="clip"
            id="C"
            src="/Dsc_Oh.mp3"
          ></audio>
        </button>
      </div>
    </main>
  );
}

export default App;
