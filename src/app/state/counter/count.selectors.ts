import {createFeatureSelector, createSelector} from "@ngrx/store";
import {COUNTER_KEY, CountState} from "./counter";



export const featureSelector = createFeatureSelector<CountState>(COUNTER_KEY);

export const countSelector = createSelector(
    featureSelector, (state: CountState): number => state.counter
)

export const updatedAtSelector = createSelector(
    featureSelector, (state: CountState): number | undefined => state?.updatedAt
)