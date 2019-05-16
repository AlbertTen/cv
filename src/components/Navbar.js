import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 

class Navbar extends Component {
    render(){   /* metodo */   /*Cambiar class por ClassName ya que en JS se pone className */
        return(
            <header>   
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Curriculum Vitae</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link">Datos Generales</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/escolares" className="nav-link">Datos Escolares</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/experiencia" className="nav-link">Experiencia</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/reconocimientos" className="nav-link">Reconocimientos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/premios" className="nav-link">Premios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/habilidades" className="nav-link">Habilidades</Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>

            

            </header>
        );
    }
}

export default Navbar;