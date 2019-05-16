import React, {Component} from 'react'; 

/*View para Datos Escolares  */
class Datosescolares extends Component {
    render(){
        return (
          
        <div> <h3 align="center">"Datos Escolares"</h3> <br></br>

            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><strong>Instituto Tecnológico de Pachuca</strong></a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><strong>Centro de Bachillerato Tecnológico Industrial y de Servicios 
                    CBTis No. 222</strong></a>
                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages"><strong>Escuela Secundaria Técnica No. 1</strong></a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings"><strong>Escuela Primaria "Julián Villagrán"</strong></a>
                </div>
            </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                        Egresado como Ingeniero en Tecnologías de la Información y Comunicación.<br></br> <br></br>
                        Período: 2012 - 2017. <br></br> <br></br>
                        Dirección: Felipe Ángeles Km. 84.5, Venta Prieta, 42083 Pachuca de Soto, Hgo.
                    </div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                        Período: 2009 - 2012 <br></br> <br></br>
                        Dirección: Blvd. Felipe Ángeles, México - Pachuca Km. 84.5, Issste, 42083. Pachuca de Soto, Hgo.
                    </div>
                    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                        Período: 2006 - 2009 <br></br> <br></br>
                        Dirección: Blvd. Felipe Ángeles S/N, Issste, 42083. Pachuca de Soto, Hgo.
                    </div>
                    <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                        Período: 2000 - 2006 <br></br> <br></br>
                        Dirección: Calle Ignacio Allende No. 108, Pachuca de Soto, Hgo.
                    </div>
                </div>
                </div>
            </div>
        </div>
            
        );
    }
}

export default Datosescolares;
