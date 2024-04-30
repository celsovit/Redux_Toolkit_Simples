import { useSelector } from 'react-redux'

import Card from './Card'

const numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default function Media() {

    const min = useSelector(state => state.numeros.min)
    const max = useSelector(state => state.numeros.max)
    const aleatorio = numeroAleatorio(min, max)

    return (
        <Card title='Sorteio dos Números' purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ aleatorio }</strong>
                </span>
            </div>
        </Card>
    )

}
