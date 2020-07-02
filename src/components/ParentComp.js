import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComponentT from './PureComponentT'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pollet'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Pollet'
            })
        }, 2000)
    }
    
    render() {
        console.log('#############render Parent component')

        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>

                {/* <RegComp name={this.state.name} />
                <PureComponentT name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
