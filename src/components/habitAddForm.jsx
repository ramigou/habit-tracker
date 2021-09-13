import React, { Component } from "react";

class HabitAddForm extends Component {
  // 직접 DOM 요소에 접근하지 않고 연결하고 싶은 요소에 해당 변수를 연결해줌
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (event) => {
    // refresh 방지
    event.preventDefault();
    const name = this.inputRef.current.value;
    // input에 무언가가 적혀있다면 onAdd함수에 전달해줌
    name && this.props.onAdd(name);

    // add 한 후 입력 칸 초기화 하는 방법
    // this.inputRef.current.value = "";
    // 정석으로 초기화하는 방법
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Type your habits"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
