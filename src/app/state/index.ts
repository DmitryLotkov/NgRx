import {ActionReducerMap} from "@ngrx/store";
import {countReducer, CountState} from "./counter/counter";


export interface State {
    counter: CountState,
}

export const reducers: ActionReducerMap<State> = {
    counter: countReducer,
}