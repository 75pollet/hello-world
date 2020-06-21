import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message: 'we are in the year 2020'
        }
		}
		
		changeMessage(){			
			 	this.setState({
					 message: 'the changed message is here'
				 }
				 )
		}
    render(){
			return (
				<div>
					<h1>{this.state.message} My kitten is hungry</h1>
					<button onClick={() => this.changeMessage()}>Subscribe</button>
				</div>    
			)
    }
}

export default Message;