import React, { Component } from 'react';

import './App.css';
import Membre from './component/Membre'





class App extends Component {
 
  
  render (){
    return (
      
        <div className="App">
          <header className="App-header">
            <nav className='myWork' id='nav'>
              <ol>
                <div id="droite">
                  <li className='myWork' >
                    Akram IDRISS
                  </li>
                </div>
                <div id="gauche">
                  <li className='myWork' >
                    resume
                  </li>
                  <li className='myWork'>
                    work
                  </li>
                </div>
              </ol>
            </nav>
            
          </header>
          <Membre />
        </div>  
    )
}


}

export default App;



