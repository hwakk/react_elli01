import React, { useEffect, useState } from "react";

function Counter({
  totalCount,
  startValue,
  addValue,
  plusTotalCount,
  minusTotalCount,
}) {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    console.log(startValue);
  }, []);

  const handleCount = () => {
    let num = count;
    num = num + addValue;
    setCount(num);
    plusTotalCount(addValue);
  };
  const resetCount = () => {
    minusTotalCount(count - startValue);
    setCount(startValue);
  };

  return (
    <div className="counter">
      <span className="number">
        {count} <span className="total">/{totalCount}</span>
      </span>
      <button className="button" onClick={handleCount}>
        Add +
      </button>
      <button className="button" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
