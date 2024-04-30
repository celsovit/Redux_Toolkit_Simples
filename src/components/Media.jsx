import { useSelector } from 'react-redux'

import Card from './Card'

export default function Media() {

    const min = useSelector(state => state.numeros.min)
    const max = useSelector(state => state.numeros.max)

    return (
        <Card title='Média dos Números' green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ (max + min) / 2 }</strong>
                </span>
            </div>
        </Card>
    )

}
