import './Intervalo.css';
import React from 'react';

import Card from './Card';

export default props => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (min + max)) - min;
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