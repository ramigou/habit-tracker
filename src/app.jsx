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
    // state에 있는 habits 배열을 복사
    const habits = [...this.state.habits];
    // 인자로 넘어온 habit 객체가 배열의 몇 번 인덱스인지 확인
    const index = habits.indexOf(habit);
    // local habits 배열 안에 인자로 넘어온 habit 객체의 count 를 증가
    // 이렇게 객체 자체를 수정하면 안됨!!!
    habits[index].count++;
    // key, value가 이름이 동일할 때는 하나로 생략 가능
    // state에서 key가 habits인 value에 local의 habits로 업데이트 해줌
    // 즉, state 값을 직접 변경 한 것이 아님
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement function called! ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // count가 음수가 되지 않도록 처리
    const count = habits[index].count - 1;
    // 직접 수정하는 것 좋지 않음.. 추후 수정 ..?????
    habits[index].count = count < 0 ? 0 : count;
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
    const habits = [...this.state.habits].map((habit) => {
      habit.count = 0;
      return habit;
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
