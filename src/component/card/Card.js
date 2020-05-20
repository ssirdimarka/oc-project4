import React, { Fragment } from 'react'
import './Card.css'

const Card = (props) =>{
    const nom = props.nom
    const prénom= props.prénom
    const annéeDeNaissance= props.annéeDeNaissance
   
    const handleClick = () => console.log('Click')
    return(
        <Fragment>
            <div className="card">
                
                <div className="container">
                    <h4><b>{nom} {prénom} </b></h4>
                    <h4><b>Année de naissance : {annéeDeNaissance}</b></h4>
                    <p>{props.children}</p>  
                    <button onClick={handleClick} id='upload'>Upload</button>
                </div>
                
                
            </div>
        </Fragment>    
    )
}
export default Card