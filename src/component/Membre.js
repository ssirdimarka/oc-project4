import React, { Component } from 'react'
import './Membre.css'
import Card from './card/Card'

const identité = {
    membre1:{
        nom: 'IDRISS',
        prénom : 'Akram',
        annéeDeNaissance : 1988
    },
    membre2:{
        nom: 'PETCHOT-BACQUÉ',
        prénom:'Hélène',
        annéeDeNaissance : 1992
    }
  }


class Membre extends Component {

    state ={
        identité
      }
      handleClick =()=>console.log('Click')


    render (){
        return (
            <div >
                <h2 className='Membre'>Membre</h2>
                <p className='Membre'> SALUT </p>
                <div className='cards'>
                <Card nom={this.state.identité.membre1.nom} prénom={this.state.identité.membre1.prénom} annéeDeNaissance={this.state.identité.membre1.annéeDeNaissance}>
                    <strong> ceci contiendra du text </strong>
                </Card>
                <Card nom='PETCHOT-BACQUÉ' prénom='Hélène'annéeDeNaissance={this.state.identité.membre2.annéeDeNaissance}>
                     ceci contiendra du text 
                </Card>
                
                </div>
                <button onClick={this.handleClick}>add card</button>
            </div>
        )
    }
    
}

export default Membre