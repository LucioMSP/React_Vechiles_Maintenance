import React, {Component} from 'react';

export default class FormAutomovil extends Component {
    constructor(){
        super();
        this.state={
            marca: '',
            modelo: '',
            anio: '',
            transmision: ''
        }
    }

    agregarAutomovil(evt){
        evt.preventDefault()

        this.props.agregarAutomovil(this.state.marca,this.state.modelo,this.state.anio,this.state.transmision)

        this.setState({
            marca:"",
            modelo:"",
            anio:"",
            transmision:""
        });
    }

    updateMarca(evt){
        this.setState({
            marca: evt.target.value
        })
    }

    updateModelo(evt){
        this.setState({
            modelo: evt.target.value
        })
    }

    updateAnio(evt){
        this.setState({
            anio: evt.target.value
        })
    }

    updateTransmision(evt){
        this.setState({
            transmision: evt.target.value
        })
    }

    render(){
        return(
            <form onSubmit={e=>this.agregarAutomovil(e)}>
                <br></br>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="marca">Marca:</label>
                        <input 
                            name="marca"
                            type="text"
                            className="form-control"
                            value={this.state.marca}
                            onChange={this.updateMarca.bind(this)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="modelo">Modelo:</label>
                        <input 
                            name="modelo"
                            type="text"
                            className="form-control"
                            value={this.state.modelo}
                            onChange={this.updateModelo.bind(this)}
                        />
                    </div>
                    <div className="col-md-6" style={{marginTop:'10px'}}>
                        <label htmlFor="anio">Año:</label>
                        <input 
                            name="anio"
                            type="text"
                            className="form-control"
                            value={this.state.anio}
                            onChange={this.updateAnio.bind(this)}
                        />
                    </div>
                    <div className="col-md-6" style={{marginTop:'10px'}}>
                        <label htmlFor="transmision">Transmision:</label>
                        <input 
                            name="transmision"
                            type="text"
                            className="form-control"
                            value={this.state.transmision}
                            onChange={this.updateTransmision.bind(this)}
                        />
                    </div>
                    <div className="col-md-6" style={{marginTop:'10px'}}>
                        <button type='submit' className="btn btn-primary mb-2">
                            Agregar
                        </button>
                    </div>
                </div> 
            </form> 
        )
    }
}