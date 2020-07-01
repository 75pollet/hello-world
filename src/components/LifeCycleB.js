import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'pollet'
    }

    console.log('LifeCycleB constructor')
  }

  static getDerivedStateFromProps(props, state){
    console.log('get derived state from props')

    // this function returns the new state or null. we return null in this case
    return null
  }

  componentDidMount(){
    console.log('Component did mount')
  }
  
  render() {
    console.log('Lifecycle B render')
    return (
      
      <div>
         Lifecycle B    
      </div>
        )
  }
}

export default LifecycleB
