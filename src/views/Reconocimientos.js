import React, {Component} from 'react'; 

/*View para Datos Reconocimientos */
class Reconocimientos extends Component {
    render(){
        return (
            <div align="center">
                <h3>"Reconocimientos"</h3>

                <br></br>

                    <ul class="list-group">
                        <li class="list-group-item">Curso de capacitación y aprobación de evaluaciones en: 
                            Microsoft Word y Power Point.
                        </li>
                        <li class="list-group-item">Curso de capacitación y aprobación de evaluaciones en: 
                            HTML, HTML 5, CSS y CSS 3, a través de la plataforma "SoloLearn".
                        </li>
                    </ul>
            </div>

        );
    }
}

export default Reconocimientos;
