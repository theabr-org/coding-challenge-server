import { createReducer, on } from '@ngrx/store';
import { getFishList, resetFishList } from './fish-list.action';

interface FishState {
	fishList: any[];
	selectedFishId: number | undefined;
}

const initialState: FishState = {
	fishList: [],
	selectedFishId: undefined
};

export const fishListReducer = createReducer(
	initialState,
	on(getFishList, (state) => initialState),
	on(resetFishList, (state) => initialState)
);