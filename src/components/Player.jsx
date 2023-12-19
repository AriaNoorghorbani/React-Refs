import { useState } from "react";

export default function Player() {
  const [changePlayer, setChangePlayer] = useState(null);
  const [submit, setSubmit] = useState(false);

  function handleChange(event) {
    setChangePlayer(event.target.value);
  }

  function handleSubmit() {
    setSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? changePlayer : "unknown entity"} </h2>
      <p>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
