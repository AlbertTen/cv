import React, {Component} from 'react'; 

/*View para Datos Premios */
class Premios extends Component {
    render(){
        return (

        <div>
             <div align="center"><h3>"Premios"</h3></div>

             <br></br>
        
            <div class="media">
                <img src={require('../images/MicrosoftLogo1.png')} class="mr-3" alt="..."></img>
                <div class="media-body">
                    <h5 class="mt-0">Certificado en "Acreditación de Competencias Tecnológicas"</h5>
                    Acreditación de Competencias Tecnológicas para la productividad
                    en: Microsoft Word Y Microsoft Power Point.
                </div>
            </div> 
            
            <br></br>

            <div class="media">
                <img src={require('../images/SoloLearn2.jpg')} class="mr-3" alt="..."></img>
                <div class="media-body">
                    <h5 class="mt-0">Certificado en "Acreditación de Cursos" en la plataforma "SoloLearn" </h5>
                        Acreditación de cursos en: HTML, HTML 5, CSS y CSS 3.
                </div>
            </div> <br></br>
        </div>

        );
    }
}

export default Premios;
