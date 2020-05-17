import { createStore, combineReducers } from 'redux';
import NumeroReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: NumeroReducer
});

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig