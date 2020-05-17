import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

 const Media = props => {
    const {min, max} = props;
    return (
        <Card title='Media dos Numeros' green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(max+min)/2}</strong>
                </span>
            </div>
        </Card>
    );
}

function mapStateToProps(state){
    const {min, max} = state.numeros;
    return {
        min,
        max
    }
}

export default connect(mapStateToProps)(Media);