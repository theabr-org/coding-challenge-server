import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { DataService } from 'src/services/data.service';
import { FishListActionTypes } from './fish-list.action';

@Injectable()
export class FishListEffects {

	loadFishList$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FishListActionTypes.GET_FISH_LIST),
			exhaustMap(() => this.dataService.getAllFish()
				.pipe(
					map(fishList => ({ type: FishListActionTypes.FISH_LIST_LOADED, payload: fishList })),
					catchError(() => of({ type: FishListActionTypes.FISH_LIST_ERROR }))
				)
			)
		)
	);

	constructor(
		private actions$: Actions,
		private dataService: DataService
	) { }
}