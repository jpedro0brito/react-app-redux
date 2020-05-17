import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

 const Sorteio = props => {
    const {min, max} = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <Card title='Sorteio dos Numeros' purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    );
}

const mapStatetoProps = state => {
    const {min, max} = state.numeros;
    return {
        min,
        max
    }
}

export default connect(mapStatetoProps)(Sorteio);