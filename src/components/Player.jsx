import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  function handleSubmit() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
