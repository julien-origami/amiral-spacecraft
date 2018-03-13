import React, { Component } from 'react'
import rocket from '../images/rocket.svg'
import SpaceCraft from './SpaceCraft'

class App extends Component {

     render() {
         const fleet = this.props.data.fleet.map((s, i) => (
             <SpaceCraft key={i} spacecraft={s} />
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
                 <div className='token'>LAST TOKEN : { this.props.data.token }</div>
                 <div style={{ marginTop: '30px' }}>
                    { fleet }
                 </div>
             </div>
         )
     }

}

export default App
