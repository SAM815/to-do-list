//Since we're gonna be adding a todo thing in our state
//this is gonna be a class based component
//AddTodo.js
import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
            {/**set the value of this field to the state on code line 8 
                     * this empties the state
                    */}
        </form>
      </div>
    )
  }
}

export default AddTodo