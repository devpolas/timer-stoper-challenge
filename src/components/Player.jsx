import { useRef, useState } from "react";

export default function Player() {
  const userName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handelPlayerName() {
    setPlayerName(userName.current.value);
    userName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown Entry"}</h2>
      <p>
        <input type="text" ref={userName} />
        <button onClick={() => handelPlayerName()}>Set Name</button>
      </p>
    </section>
  );
}
