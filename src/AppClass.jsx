import React from "react";
import Counter from "./basic/components/Counter";

class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  plusTotalCount = (num) => {
    this.setState({ count: this.state.count + num });
  };

  minusTotalCount = (num) => {
    this.setState({ count: this.state.count - num });
  };

  componentDidMount() {
    console.log("컴포넌트가 마운트 되었음");
  }

  componentWillUnmount() {
    console.log("컴포넌트가 곧 언마운트될 예정임");
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count > 10 ? "🔥" : "💧"}
        </div>
        <div className="counters">
          <Counter
            totalCount={this.state.count}
            startValue={0}
            addValue={1}
            plusTotalCount={this.plusTotalCount}
            minusTotalCount={this.minusTotalCount}
            onClick={this.onClick}
          />
          <Counter
            totalCount={this.state.count}
            startValue={0}
            addValue={1}
            plusTotalCount={this.plusTotalCount}
            minusTotalCount={this.minusTotalCount}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default AppClass;
