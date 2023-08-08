import { useEffect, useState } from "react";
//main component
export default function App() {
  const [advice, setadvice] = useState(null);
  const [count, setcount] = useState(0);
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setadvice(data.slip.advice);
    setcount(count + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    //returning jsx
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}> Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      {" "}
      You have read <strong>{props.count}</strong> piece of Advice
    </p>
  );
}
