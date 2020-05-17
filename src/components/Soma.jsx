import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Soma =  props => {
    const { min, max } = props;
    return (
        <Card title='Soma dos Numeros' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min+max}</strong>
                </span>
            </div>
        </Card>
    );
}

const mapStateToProps = state => {
    const { min, max } = state.numeros;
    return {
        min,
        max
    };
}

export default connect(mapStateToProps)(Soma);