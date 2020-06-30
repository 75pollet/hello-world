import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       topic: 'react'
    }
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

commentsHandler = (event) => {
  this.setState({
    comments: event.target.value
  })
}

topicChange = (event) => {
  this.setState({
    topic: event.target.value
  })
}

submitter = (event) => {
  alert(`${this.state.username} has chosen ${this.state.topic}!`)
  event.preventDefault()
}
  
    render() {
        return (
          <form onSubmit={this.submitter}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleChange} />
            </div>
            <div>
                  <label>Comments</label>
                  <textarea value={this.state.comments} onChange={this.commentsHandler}></textarea>
            </div>
            <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.topicChange}>
                <option value='react'>react</option>
                <option value='angular'>angular</option>
                <option value='vue'>vue</option>

              </select>
            </div>
            <button type='submit'>Submit</button>
          </form>
        )
    }
}

export default Form


