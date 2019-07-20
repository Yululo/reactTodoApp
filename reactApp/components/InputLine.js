import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class InputLine extends Component {
  constructor(props) {
    super(props);
    this.state = {typedText: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // to take in the text you entered in
  handleChange(e) {
    this.setState({typedText: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.typedText);
  }
  render() {
    return (
      <div className="todoForm">
        <input
          type="text"
          name="add-todo"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="task"
        />
        <input type="submit" name="submit-todo" value="Add todo" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default InputLine;
