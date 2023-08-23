import { Component,Input } from '@angular/core';

@Component({
	selector: 'app-fish-option',
	templateUrl: './fish-option.component.html',
	styleUrls: ['./fish-option.component.css']
})
export class FishOptionComponent {
	@Input() item:any = {};
}
