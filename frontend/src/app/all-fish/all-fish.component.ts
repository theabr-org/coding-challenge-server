import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFishList } from 'src/store/fish-list.action';

@Component({
	selector: 'app-all-fish',
	templateUrl: './all-fish.component.html',
	styleUrls: ['./all-fish.component.css']
})
export class AllFishComponent implements OnInit {
	constructor(private store: Store) { }
	public fishData: any[] = [];

	ngOnInit() {
		this.store.dispatch(getFishList())
	}
}
