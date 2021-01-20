import './App.css';
import React from 'react';
import Primeiro from './Components/Basicos/Primeiro.jsx';
import Card from './Components/layout/Card.jsx';
import ComParametro from './Components/Basicos/ComParametro';
import ComFilhos from './Components/Basicos/ComFilhos';
import Repeticao from './Components/Basicos/Repeticao';
import Condicional from './Components/Basicos/Condicional';
import CondicionalComIf from './Components/Basicos/CondicionalComIf';
import Pai from './Components/Comunicacao/Direta/Pai';
import Super from './Components/Comunicacao/indireta/Super';
import Input from './Components/Form/Input';
import Contador from './Components/Contador/Contador'

export default (props) => (
    <div className="App">
        <h1>Funtamentos React</h1>
        <div className="Cards">
            <Card titulo="#10-Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#9-Input" color="#9C0F5F">
                <Input></Input>
            </Card>
            <Card titulo="#8-Comunicação indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#7-Comunicação direta" color="#4298B5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#6-Condicional v2" color="#FA6900">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="#5-Condicional v1" color="#E94C6F">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#4-Repetição" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#3-Componente com filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#2-Componente com parametro" color="#F85CB">
                <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
            </Card>

            <Card titulo="#1-Primeiro Componente" color="#92B06A">
                <Primeiro />
            </Card>

        </div>


    </div>
)