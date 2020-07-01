import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'pollet'
    }

    console.log('LifeCycleA constructor')
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
    console.log('Lifecycle A render')
    return (
      
      <div>
         Lifecycle A 
         <LifecycleB />   
      </div>
        )
  }
}

export default LifecycleA
