import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "eating", count: 0 },
      { id: 3, name: "coding", count: 0 },
      { id: 4, name: "sleeping", count: 0 }
    ]
  };

  handleIncrement = (habit) => {
    // habits 배열을 돌면서 인자로 들어온 habit 객체의 id가 같다면
    // 해당 habit 객체의 count만 변경해줌
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);

    // filter 함수!!
    const habits = this.state.habits.filter((item) => item.id !== habit.id);

    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    // habits.push({ id: habits.length + 1, name, count: 0 });

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <>
        {/* count가 0 이상인 습관 요소를 배열로 만든 후 이 배열의 길이를 반환 */}
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
