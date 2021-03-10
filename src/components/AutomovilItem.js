import React, {Component} from 'react';

export default class AutomovilItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            editMode: false,
            marca: this.props.marca,
            modelo: this.props.modelo,
            anio: this.props.anio,
            transmision: this.props.transmision
        }
    }

    onEditMode(){
        if(this.state.editMode){
            const {onUpdateAuto} = this.props
            onUpdateAuto(this.state.marca,this.state.modelo,this.state.anio,this.state.transmision)
        }

        this.setState({
            editMode: !this.state.editMode
        })
    }

    handledChange(evt){
        this.setState({
            marca: evt.target.value
        })
    }

    handledChange2(evt){
        this.setState({
            modelo: evt.target.value
        })
    }

    handledChange3(evt){
        this.setState({
            anio: evt.target.value
        })
    }

    handledChange4(evt){
        this.setState({
            transmision: evt.target.value
        })
    }

    dynamicComponent(){
        let input, input2, input3, input4, actionButton
        const {editMode, marca,modelo,anio,transmision} = this.state
        
        if(editMode){
            input = (
                <input
                    type= "text"
                    className="form-control"
                    value = {marca}
                    onChange = {(e) => this.handledChange}
                />
            )

            input2 = (
                <input
                    type= "text"
                    className="form-control"
                    value = {modelo}
                    onChange = {(e) => this.handledChange2}
                />
            )

            input3 = (
                <input
                    type= "text"
                    className="form-control"
                    value = {anio}
                    onChange = {(e) => this.handledChange3}
                />
            )

            input4 = (
                <input
                    type= "text"
                    className="form-control"
                    value = {transmision}
                    onChange = {(e) => this.handledChange4}
                />
            )

            actionButton = (
                    <button
                        type="buttoon"
                        className="btn btn-warning text-white"
                        onClick={this.onEditMode.bind(this)}
                    >
                        Actualizar
                    </button>
                )
        }
        else{
            input = marca
            input2 = modelo
            input3 = anio
            input4 = transmision

            actionButton = (
                <button
                    type="buttoon"
                    className="btn btn-warning text-white"
                    onClick={this.onEditMode.bind(this)}
                >
                    Editar
                </button>
            )
        }

        return(input, input2, input3, input4, actionButton)
    }

    render(){
        let {index, onRemove} = this.props
        const dynamicComponent = this.dynamicComponent()

        return(
            <tr style={{textAlign: 'center'}}>
                <th scope='col'>{index+1}</th>
                <th scope='col'>{index}</th>
                <th scope='col'>{dynamicComponent.input}</th>
                <th scope='col'>{dynamicComponent.input2}</th>
                <th scope='col'>{dynamicComponent.input3}</th>
                <th scope='col'>{dynamicComponent.input4}</th>

                <th scope='col'>
                    <div className="btn group" role="group">
                        {dynamicComponent.actionButton}
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onRemove}
                            style={{marginLeft:'7px'}}
                            >
                                Eliminar
                        </button>
                    </div>
                </th>
            </tr>
        )
    }
}