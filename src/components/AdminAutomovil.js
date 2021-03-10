import React,{Component} from 'react';
import FormAutomovil from './FormAutomovil';
import AutomovilItem from './AutomovilItem';

export default class AdminAutomovil extends Component{
    constructor(){
        super()
        this.state = {
            arrayVehiculos: []
        }
    }

    agregarAutomovil(marca,modelo,anio,transmision){
        if(marca!== "" && modelo!== "" && anio!== "", transmision!== ""){
            console.clear()

            this.setState({
                arrayVehiculos: [
                    ...this.state.arrayVehiculos,
                    {marca:marca,modelo:modelo,anio:anio,transmision:transmision}
                ]
            })
        }else{
            alert('Por favor, complete todos los campos del formulario.')
        }
    }

    updateAutomovil(marca,modelo,anio,transmision,index){
        console.clear()

        let arrayVehiculos = this.state.arrayVehiculos.slice()
        arrayVehiculos[index] = {marca:marca,modelo:modelo,anio:anio,transmision:transmision}
        this.setState({arrayVehiculos})
    }

    removeAutomovil(index){
        console.clear()

        let array = this.state.arrayVehiculos
        let i = array.indexOf(index)

        if(i!==-1){
            array.splice(i,1)
            this.setState({array})
        }
    }

    render(){
        const {arrayVehiculos} = this.state

        if(!arrayVehiculos.length){
            return(
                <div className="col-md-12">
                    <FormAutomovil
                        agregarAutomovil={(marca,modelo,anio,transmision)=>this.agregarAutomovil(marca,modelo,anio,transmision)}
                    />
                    <hr/>
                    <div className="alert alert-danger">
                        No se encontraron datos.
                    </div>
                </div>
            )
        }

        return(
            <div className="col-md-12">
                    <FormAutomovil
                        agregarAutomovil={(marca,modelo,anio,transmision)=> this.agregarAutomovil(marca,modelo,anio,transmision)}
                    />
                    <hr/>
                    <table className="table table-hover" id="tblAutomoviles">
                        <thead>
                            <tr style={{textAlign:'center'}}>
                                <th scope="col">#</th>
                                <th scope="col">Indice</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Año</th>
                                <th scope="col">Transmision</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                arrayVehiculos.map((o,index)=>{
                                    console.log(o)

                                    return(
                                        <AutomovilItem
                                            onUpdateAuto={(marca,modelo,anio,transmision)=> this.updateAutomovil(marca,modelo,anio,transmision,index)}
                                            onRemove={()=> this.removeAutomovil(o)}
                                            index = {index}
                                            key = {index}
                                            marca = {o.marca}
                                            modelo = {o.modelo}
                                            anio = {o.anio}
                                            transmision = {o.transmision}
                                            >
                                        </AutomovilItem>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}