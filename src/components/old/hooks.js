import { useState } from 'react'

export default function CounterHooks() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1)
  }
  const handleDecrement = () => {
    setValue(value - 1)
  }
  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <div className="buttons">
        <button data-testid="increment" onClick={handleIncrement}>Increment</button>
        <button data-testid="decrement" onClick={handleDecrement}>Decrement</button>
      </div>
      <p data-testid="count">{value}</p>
    </div>
  );
}
