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
        {this.props.todos.map(data => (
          <Todo key={data.taskText} data={data.taskText} completed={data.completed} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
