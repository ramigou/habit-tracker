import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  // 변화되는 부분을 habit.count처럼 별도로 전달해줘야 count를 변화시킬 수 있음
  // PureComponent에서 habit 객체 안의 count만 변경하면 레퍼런스를 참조해서 동일하다고 판단하여
  // render 함수를 호출하지 않음 그래서 따로 props를 전달해야 함
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              // name={habit.name}
              // count={habit.count}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        {/* reset 버튼이 재사용이 많이 된다면 컴포넌트로 따로 빼서 만들면 됨 */}
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
