import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
	selector: 'app-fish-details',
	templateUrl: './fish-details.component.html',
	styleUrls: ['./fish-details.component.css']
})
export class FishDetailsComponent {
	id: string = '';
	fish: any = {}
	constructor(private route: ActivatedRoute, private dataService: DataService) { }
	ngOnInit(): void {
		if (this.route.snapshot.paramMap.get('id')) {
			this.id = this.route.snapshot.paramMap.get('id') || ''
		}

		this.dataService.getGoFish().subscribe((fishes: any[]) => {
			let fishIndex = Number(this.id);
			this.fish = fishes.at(fishIndex);
		})
	}
}
