import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import FormPasso from './FormPasso.'
import Botoes from './Botoes'
export default class Contador extends Component {


    state = {
        passo: this.props.passo || 1, //esse "||" simboliza caso nao tenha passado o valor
        valor: this.props.valor || 0,
    }
    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }
    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }
    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }
    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <FormPasso passo={this.state.passo}
                    onPassoChange={this.mudarPasso }></FormPasso>
                <Display valor={this.state.valor}></Display>
                <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
            </div>
        )
    }
}