import './Intervalo.css';
import React from 'react';

import Card from './Card';

export default props => {
    const { min, max } = props;
    const { alterarMin, alterarMax } = props;

    return (
        <Card title='Intervalo de Numero' red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo:</strong>
                    <input type='number' value={min} onChange={e => alterarMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Maximo:</strong>
                    <input type='number' value={max} onChange={e => alterarMax(+e.target.value)}/>
                </span>
            </div>
        </Card>
    );
}