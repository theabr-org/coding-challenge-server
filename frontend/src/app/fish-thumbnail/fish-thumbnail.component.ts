import { Component,Input } from '@angular/core';

@Component({
	selector: 'app-fish-option',
	templateUrl: './fish-thumbnail.component.html',
	styleUrls: ['./fish-thumbnail.component.css']
})
export class FishThumbnailComponent {
	@Input() item:any = {};
}
