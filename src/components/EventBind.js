import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }

    // binding can also be done in the constructor like So
    // this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.setState({
      message: 'Goodbye'
    })
    console.log(this)
  }

  // another approach is to define the function as an arrow function

  // clickHandler = () => {
  //   this.setState({
  //     message: 'Goodbye'
  //   })
  // }
  
    render() {
        return (
            <div>
              <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>click bind</button>
                {/*  another approach instead of binding is to use an arrow function
                <button onClick={() => this.clickHandler()}></button> */}
            </div>
        )
    }
}

export default EventBind
