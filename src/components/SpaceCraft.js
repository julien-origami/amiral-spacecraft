import React, { Component } from 'react'
import rocket from '../images/rocket.svg'

class SpaceCraft extends Component {
     render() {
         return (
             <div className='spacecraft'>
                <img src={rocket} className='rocket'/>
                <p>{ this.props.spacecraft.name }</p>
                <p>{ this.props.spacecraft.lastconnection }</p>
                <p>{ this.props.spacecraft.lasttoken }</p>
             </div>
         )
     }

}

export default SpaceCraft
