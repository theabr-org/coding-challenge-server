import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DataService } from 'src/services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private dataService: DataService, private meta: Meta) {
		this.meta.addTags([
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		]);
	}
	public fishData: any[] = [];

	ngOnInit() {
		this.dataService.getGoFish().subscribe((data: any[]) => {
			this.fishData = data;
		});
	}
}
