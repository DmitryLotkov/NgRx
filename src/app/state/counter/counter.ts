import {createAction, createReducer, on, props} from "@ngrx/store";
export const COUNTER_KEY = 'counter';
export interface CountState {
    counter: number,
    updatedAt?: number
}

export const initialState: CountState = {
    counter: 0,
}

export const increase = createAction('[Counter] increase');
export const decrease = createAction('[Counter] decrease');
export const clear = createAction('[Counter] clear');
export const changeUpdatedAt = createAction('[Counter] changeUpdatedAt',
    props<{updatedAt: number}>()
)


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
    })),
    on(changeUpdatedAt, (state, action) => ({
        ...state,
        updatedAt: action.updatedAt,
    }))
)



