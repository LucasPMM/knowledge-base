import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface ProjectState {
}

export const reducers: ActionReducerMap<ProjectState> = {

};


export const mapApplicationState = (state: ProjectState) => state;
export const getApplicationState = createSelector(mapApplicationState);
