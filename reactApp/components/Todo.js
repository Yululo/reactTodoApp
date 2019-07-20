import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

export default Todo;
