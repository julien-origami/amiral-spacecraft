import React, { Component } from 'react'
import rocket from '../images/rocket.svg'

class App extends Component {

     render() {
         console.log(this.props)
         const fleet = this.props.data.fleet.map((s, i) => (
             <div key={i} className='spacecraft'>
                <img src={rocket} className='rocket'/>
                <p>{ s.name }</p>
                <p>{ s.lastconnection }</p>
                <p>{ s.lasttoken }</p>
             </div>
         ))
         return (
             <div className='content'>
                 <div>
                     <nav>
                         <a href='#'>
                             <span>Fleet</span>
                         </a>
                         <a href='#'>
                             <span>Informations</span>
                         </a>
                         <svg style={{ height:0 }}>
                             <defs>
                                 <clipPath id='shape'>
                                     <polygon points='0 0, 211 0, 255 43, 255 69, 34 69, 0 26'></polygon>
                                 </clipPath>
                             </defs>
                         </svg>
                     </nav>
                 </div>
                 <div>
                    { fleet }
                 </div>
             </div>
         )
     }

}

export default App
