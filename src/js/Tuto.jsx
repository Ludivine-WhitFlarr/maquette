import React , {Component} from 'react';



export default class Tuto extends Component {
  render(){
    return (
      <div className="Tuto">
        <div className="Utilisateur">
          <div></div>
          <h2>{this.props.nom}</h2>
        </div>
        <div className="contenu">
          <p>{this.props.contenu}</p>
        </div>
      </div>
    )
  }
}
