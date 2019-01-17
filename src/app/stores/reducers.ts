import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {

};


export const mapApplicationState = (state: AppState) => state;
export const getApplicationState = createSelector(mapApplicationState);
