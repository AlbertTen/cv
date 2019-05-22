import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Datosgenerales from './views/Datosgenerales';
import Datosescolares from './views/Datosescolares';
import Experiencia from './views/Experiencia';
import Reconocimientos from './views/Reconocimientos';
import Premios from './views/Premios';
import Habilidades from './views/Habilidades';
import {
    BrowserRouter as Router,
    Route, 
    Switch 
} from 'react-router-dom';


function App() {
    return(
        
       <Router> 
           <Navbar/>
            <Switch>
                <Route exact path="/" component={Datosgenerales}/>
                <Route path="/escolares" component={Datosescolares}/>
                <Route path="/experiencia" component={Experiencia}/>
                <Route path="/reconocimientos" component={Reconocimientos}/>
                <Route path="/premios" component={Premios}/>
                <Route path="/habilidades" component={Habilidades}/>
            </Switch>
            <Footer/>
       </Router>
       
    );
}

export default App; 
