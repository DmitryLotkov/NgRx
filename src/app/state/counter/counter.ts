import {createAction, createReducer, on} from "@ngrx/store";

export interface CountState {
    counter: number,
    updatedAt: number
}

export const initialState: CountState = {
    counter: 0,
    updatedAt: Date.now()
}

export const increase = createAction('[Counter] increase');
export const decrease = createAction('[Counter] decrease');
export const clear = createAction('[Counter] clear');


export const countReducer = createReducer(
    initialState,
    on(increase, state => ({
        ...state, counter: state.counter + 1
    })),
    on(decrease, state => ({
        ...state, counter: state.counter - 1
    })),
    on(clear, state => ({
        ...state, counter: 0,
    }))
)



