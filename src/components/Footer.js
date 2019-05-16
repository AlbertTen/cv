import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className="card text-center">
                    <div className="card-header">
                        <div><h3><font color="teal">CONTACTO</font></h3></div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Follow me!</h5>
                        <p className="card-text">Find me on my social networks!</p>
                        <a href="https://www.facebook.com/alberto.tenorio.96780" className="btn btn-dark">Facebook</a>
                        <a href="https://twitter.com" className="btn btn-primary">Twitter</a>
                        <a href="https://instagram.com/albert_tenorio1788" className="btn btn-danger">Instagram</a>
                        
                    </div>
                    
                </div>
            </footer>
        );    
    }
}

export default Footer;