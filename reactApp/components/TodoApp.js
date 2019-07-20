import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [
  {taskText: 'to eat', completed: false},
  {taskText: 'to sleep', completed: false},
  {taskText: 'to code', completed: true}
];

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  removeTodo(index) {
    // console.log(dummyData, index);
    dummyData.splice(index, 1);
    // console.log(dummyData);
    this.setState({todos: dummyData});
  }

  // it is executed when all elements got rendered
  componentDidMount() {
    this.setState({todos: dummyData});
  }

  // it takes in task and update the dummy data
  addTodo(task) {
    dummyData.push({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }

  setComplete(index) {
    console.log('index: ' + index);
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({todos: dummyData});
  }

  render() {
    return (
      <div>
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          todos={this.state.todos}
          todoXClick={this.removeTodo.bind(this)}
          todoToggle={this.setComplete.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
