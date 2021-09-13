// function component 자동 만들기 rsi
import React, { memo } from "react";

// memo를 사용하면 해당 component에 props가 사용되지 않는다면 render 되지 않음
const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    // refresh 방지
    event.preventDefault();
    const name = inputRef.current.value;
    // input에 무언가가 적혀있다면 onAdd함수에 전달해줌
    name && props.onAdd(name);

    // add 한 후 입력 칸 초기화 하는 방법
    // inputRef.current.value = "";
    // 정석으로 초기화하는 방법
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Type your habits"
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
