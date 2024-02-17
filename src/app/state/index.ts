import {ActionReducerMap} from "@ngrx/store";
import {COUNTER_KEY, countReducer, CountState} from "./counter/counter";


export interface State {
    [COUNTER_KEY]: CountState,
}

export const reducers: ActionReducerMap<State> = {
    [COUNTER_KEY]: countReducer,
}