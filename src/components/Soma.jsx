import { useSelector } from 'react-redux'

import Card from './Card'

export default function Media() {

    const min = useSelector(state => state.numeros.min)
    const max = useSelector(state => state.numeros.max)

    return (
        <Card title='Soma dos Números' blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ max + min }</strong>
                </span>
            </div>
        </Card>
    )

}
