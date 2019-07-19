/* eslint-disable no-tabs */
/* eslint-disable react/jsx-filename-extension */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  {taskText: 'to eat', completed: false},
  {taskText: 'to sleep', completed: false},
  {taskText: 'to code', completed: true}
];
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // const [data] = props.data;
  }

  render() {
    const {data, completed} = this.props;
    const listEle = completed ? <strike>data</strike> : data;
    return (
      <li>
        <button type="button" className="delete-btn">
          x
        </button>
        {listEle}
      </li>
    );
  }
}

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

class InputLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="todoForm">
        <input type="text" name="add-todo" value="" placeholder="task" />
        <input type="submit" name="submit-todo" value="Add todo" />
      </div>
    );
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    this.setState({todos: dummyData});
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
