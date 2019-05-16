import React, {Component} from 'react'; 

/*View para Habilidades */
class Habilidades extends Component {
    render(){
        return (
           
            <div align ="center">
                <ul class="list-group">
                <h3>"Habilidades"</h3> <br></br>
          
                    <li class="list-group-item list-group-item-primary">Responsabilidad</li>
                    <li class="list-group-item list-group-item-secondary">Trabajo en equipo</li>
                    <li class="list-group-item list-group-item-success">Habilidades Sociales</li>
                    <li class="list-group-item list-group-item-danger">Capacidad de organización</li>
                    <li class="list-group-item list-group-item-warning">Facilidad de aprendizaje</li>
                    <li class="list-group-item list-group-item-info">Manejo de herramientas digitales</li>
                    <li class="list-group-item list-group-item-dark">Buen manejo de idioma Inglés</li>
                </ul>
            </div>  

        );
    }
}

export default Habilidades;
