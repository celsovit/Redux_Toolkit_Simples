import { configureStore } from '@reduxjs/toolkit'
import numerosReducer from './reducers/numerosSlice'

const store = configureStore({
    reducer: {
        numeros: numerosReducer
    },
})

export default store
