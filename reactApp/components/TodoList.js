import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((data, index) => (
          <Todo
            key={data.taskText}
            data={data.taskText}
            completed={data.completed}
            xClick={() => this.props.todoXClick(index)}
            xComplete={() => this.props.todoToggle(index)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
