/* eslint-disable no-tabs */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['to eat', 'to sleep', 'to code'];
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // const [data] = props.data;
  }

  render() {
    return (
      <li>
        <button className="delete-btn">x</button>
        {this.props.data}
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
        {dummyData.map(data => (
          <Todo key={data} data={data} />
        ))}
      </ul>
    );
  }
}

// class InputLine extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (  );
//     }
// }

// class TodoApp extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	render() {
// 		return <h1>Hello</h1>;
// 	}
// }

ReactDOM.render(<TodoList />, document.getElementById('root'));
