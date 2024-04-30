import { useSelector, useDispatch } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/reducers/numerosSlice'

import Card from './Card'

import './Intervalo.css'

export default function Intervalo() {

    const min = useSelector(state => state.numeros.min)
    const max = useSelector(state => state.numeros.max)
    const dispatch = useDispatch()

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={ min } 
                        onChange={ e => dispatch(alterarNumeroMinimo(+e.target.value)) }
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={ max } 
                        onChange={ e => dispatch(alterarNumeroMaximo(+e.target.value)) }
                    />
                </span>
            </div>
        </Card>
    )
}
