import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const timer = useRef();
  const modal = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      modal.current.open();
    }, targetTime * 1000);
    setIsStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setIsStarted(false);
  }

  return (
    <>
      <ResultModal result="Lost" targetTime={targetTime} ref={modal} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isStarted ? handleStop : handleStart}>
            {isStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isStarted ? "active" : undefined}>
          {isStarted ? "Time is running..." : "Time is inactive"}
        </p>
      </section>
    </>
  );
}
