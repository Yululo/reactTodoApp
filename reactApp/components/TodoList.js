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
          <Todo
            // key should be a unique number for the index of the array
            key={data._id}
            data={data.task}
            completed={data.completed}
            xClick={() => this.props.todoXClick(data._id)}
            xComplete={() => this.props.todoToggle(data._id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
