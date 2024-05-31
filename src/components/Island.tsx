import { useState } from "react";

export default function Island() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {counter} <button onClick={() => setCounter((c) => c + 1)}>++</button>
    </div>
  );
}
