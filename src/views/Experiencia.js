import React, {Component} from 'react'; 
import '../css/styles.css';

/*View para Experiencia  */
class Experiencia extends Component {
    render(){
        return (
            
            <div class="accordion" id="accordionExample" align="center">
            <h3>"Experiencia Laboral"</h3> <br></br>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Instituto Hidalguense de la Juventud (A través del Programa "Jóvenes Construyendo el Futuro" del Gobierno de México)
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <strong> Período: </strong> Marzo 2019 - Actualmente. <br></br> <br></br>
        A través del programa "Jóvenes Construyendo el Futuro", me estoy capacitando en temas de diseño web, 
        programación y base de datos, dentro del área de Tecnologías de la Información y Comunicación. 
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Vera Creando Sueños
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
        <strong> Período: </strong> Contratación por proyecto. Noviembre 2018 - Febrero 2019. <br></br> <br></br>
        Elaboración e implementación de 2 tiendas en línea en Prestashop. <br></br> <br></br>
        La primera tienda en línea fue para "ManRab", empresa que se dedica a la venta de materias primas, desechable y 
        material ecológico, todo lo necesario para cualquier fiesta.

        Y la segunda tienda en línea, fue para "PekeShoes", empresa que se dedica a la venta de calzado para niños.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Pragna/Vera Creando Sueños (A través del Programa "Mi Primer Empleo, Mi Primer Salario" del Gobierno de Hidalgo)
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        <strong> Período: </strong> Abril 2018 - Septiembre 2018 (Por terminación de período  dentro del programa). <br></br> <br></br>
        A través del programa "Mi Primer Empleo, Mi Primer Salario", del Gobierno de Hidalgo, se desarrolló una página web para la 
        Psicológa Valery Dennis Márquez Sierra así como una campaña de artículos y correos masivos (marketing) en Mailchimp, 
        con el fin de dar difusión a la venta de su libro "También Perdiendo Se Gana" y a los eventos en los que iba a participar.
        <br></br><br></br>De igual forma la creación de formularios de contacto en Google y creación de una tienda en línea en Prestahop 
        para "Aruna Bisutería", la cual se dedica a la venta de accesorios. 
      </div>
    </div>
  </div>
</div>
        );
    }
}

export default Experiencia;
