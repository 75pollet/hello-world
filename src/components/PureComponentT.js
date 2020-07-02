import React, { PureComponent } from 'react'

class PureComponentT extends PureComponent {
    render() {
        console.log('#############render Pure component')

        return (
            <div>
            Pure Component
            {this.props.name}
            </div>
        )
    }
}

export default PureComponentT
