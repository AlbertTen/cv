import React, {Component} from 'react'; 

/*View para Datos Generales */

class Datosgenerales extends Component {
    render(){
        return (

            <div className='card' style={{width: '18em;'}} >

                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <img src={require('../images/cv.png')} className="card-img-top" alt="..." height="250px" width="50px"></img>
                    </div>
                 </div>
                
                <div className="card-body">
                    <p className="card-text" align="center">
                        <h3>"Datos Generales"</h3>
                        <p> <strong>Nombre:</strong> Mario Alberto Tenorio Muñoz </p>
                        <p> <strong>Profesión:</strong> Ingeniero en Tecnologías de la Información y Comunicaciones </p>
                        <p> <strong>Dirección:</strong> Av. Rojo Gómez No. 102, Colonia Santa Julia </p>
                        <p> <strong>Teléfono: </strong> 71 4 58 86/771 111 15 23 </p>  
                        <p> <strong>Correo Electrónico:</strong> mario_ten44@hotmail.com </p>
                        <p> Pachuca de Soto, Hidalgo. </p> 

                    </p>
                </div>
            </div>
         
        );
    }
} 

export default Datosgenerales;
 