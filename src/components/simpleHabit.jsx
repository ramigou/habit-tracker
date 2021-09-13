// React hook 사용하기 연습
import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // count가 변경 될 때마다 호출되게 전달 할 수 있음
  // []만 전달하면 처음에만 호출, 업데이트되어도 전달 안됨
  useEffect(() => {
    console.log(`mount, update 동시에 했을 때 ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
