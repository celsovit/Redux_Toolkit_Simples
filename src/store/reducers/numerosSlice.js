import { createSlice } from "@reduxjs/toolkit"

const numeros = createSlice({
    name: 'numeros',
    initialState: {
        min: 1,
        max: 10,
    },
    reducers: {
        alterarNumeroMinimo: (state, action) => {
            state.min = action.payload
        },
        alterarNumeroMaximo: (state, action) => {
            state.max = action.payload
        },
    },
})

export const { alterarNumeroMinimo, alterarNumeroMaximo } = numeros.actions
export default numeros.reducer
