import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CountState} from "./counter";



export const selectCountFeature = createFeatureSelector<CountState>("counter");

export const selectCount = createSelector(
    selectCountFeature, (state: CountState): number => state.counter
)

export const selectUpdatedAt = createSelector(
    selectCountFeature, (state: CountState): number => state.updatedAt
)