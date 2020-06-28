import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin: true
    }
  }
  
    render() {
        return  this.state.isLoggedin ?
                <div>Hello P!</div> :
                <div>Hello Unknown!</div>        
    }
}

export default UserGreeting
