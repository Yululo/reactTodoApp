import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

// This is better practice than writing this url multiple times because
// if we ever change the url or port we don't want to hunt down all the places
// we used it and change all of them
const dbUrl = 'http://localhost:3000/db';

let dummyData = [
  {task: 'to eat', completed: false},
  {task: 'to sleep', completed: false},
  {task: 'to code', completed: true}
];

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  removeTodo(index) {
    // console.log(dummyData, index);
    let newData = dummyData.slice();
    newData.splice(index, 1);
    // console.log(dummyData);
    this.setState({todos: newData});
  }

  // it is executed when all elements got rendered
  componentDidMount() {
    this.setState({todos: dummyData});
    // const resp = await axios.get();
  }

  // it takes in task and update the dummy data
  addTodo(task) {
    // dummyData.push({taskText: task, completed: false});
    // this.setState({todos: dummyData});

    axios
      .post(dbUrl + '/add', {task: task, completed: false})
      .then(
        function(response) {
          // Do whatever you want with the request's response in here
          this.setState({todos: this.state.todos.concat(response.data)});
        }.bind(this)
      )
      .catch(function(error) {
        // Do whatever you want in the event of an error in here
        console.log(error);
      });
    // this.setState({todos: })
  }

  setComplete(index) {
    // console.log('index: ' + index);
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
          todoToggle={index => this.setComplete(index)}
        />
      </div>
    );
  }
}

export default TodoApp;
