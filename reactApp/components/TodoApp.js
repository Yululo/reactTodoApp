import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

// This is better practice than writing this url multiple times because
// if we ever change the url or port we don't want to hunt down all the places
// we used it and change all of them
const dbUrl = 'http://localhost:3000/db';

// let dummyData = [
//   {task: 'to eat', completed: false},
//   {task: 'to sleep', completed: false},
//   {task: 'to code', completed: true}
// ];

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  removeTodo(id) {
    // console.log(dummyData, index);
    // let newData = this.state.todos.slice();
    // newData.splice(index, 1);
    // console.log(dummyData);
    // this.setState({todos: newData});

    // receive data that only with specified id removed
    axios.post(dbUrl + '/remove', {_id: id}).then(response => {
      // this.setState({todos: response.data});
      let newTodos = this.state.todos.slice();
      for (let i in newTodos) {
        if (newTodos[i]._id === id) {
          newTodos.splice(i, 1);
        }
      }
      this.setState({todos: newTodos});
    });
  }

  // it is executed when all elements got rendered
  componentDidMount() {
    // this.setState({todos: this.todos});
    // const resp = await axios.get();
    axios.get(dbUrl + '/all').then(response => {
      this.setState({todos: response.data});
    });
  }

  // it takes in task and update the dummy data
  addTodo(task) {
    // dummyData.push({taskText: task, completed: false});
    // this.setState({todos: dummyData});

    // past data to that route, so that it can be accessed as req.body.task
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

  toggleTodo(id) {
    // console.log('index: ' + index);
    // this.state.todos[index].completed = !this.state.todos[index].completed;
    // this.setState({todos: this.todos});

    // give the route a id of the todos, so that it can toggle the
    // completed option in that route by res.body._id
    // expects a changed todo object to be pasted in
    axios.post(dbUrl + '/toggle', {_id: id}).then(response => {
      let newTodos = this.state.todos.slice();
      // {this.setState({todos: })}
      for (let i in newTodos) {
        if (newTodos[i]._id === id) {
          newTodos[i] = response.data;
        }
      }
      this.setState({todos: newTodos});
    });
  }

  render() {
    return (
      <div>
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          todos={this.state.todos}
          todoXClick={this.removeTodo.bind(this)}
          todoToggle={index => this.toggleTodo(index)}
        />
      </div>
    );
  }
}

export default TodoApp;
