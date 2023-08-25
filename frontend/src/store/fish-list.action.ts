import { createAction, props } from '@ngrx/store';

export enum FishListActionTypes {
	GET_FISH_LIST = '[Fish List] Get Fish List',
	FISH_LIST_LOADED = '[Fish List] Fish List Loaded',
	FISH_LIST_ERROR = '[Fish List] Fish List Error',
	RESET_FISH_LIST = '[Fish List] Reset Fish List',
}

export const getFishList = createAction(FishListActionTypes.GET_FISH_LIST);
export const fishListLoaded = createAction(
	FishListActionTypes.FISH_LIST_LOADED,
	props<any>()
)

export const fishListError = createAction(
	FishListActionTypes.FISH_LIST_ERROR,
	props<{ message: string }>()
)
export const resetFishList = createAction(FishListActionTypes.RESET_FISH_LIST);