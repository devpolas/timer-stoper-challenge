import { useImperativeHandle } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";

function ResultModal({ ref, targetTime, timeRemaining, handelReset }) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);

  let score = (1 - timeRemaining / (targetTime * 1000)).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost🥹 </h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={handelReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default ResultModal;
