import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [isLost, setIsLost] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setIsLost(true);
    }, targetTime * 1000);
    setIsStarted(true);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {isLost && "You are lost"}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {isStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={isStarted ? "active" : undefined}>
        {isStarted ? "Time is running..." : "Time is inactive"}
      </p>
    </section>
  );
}
