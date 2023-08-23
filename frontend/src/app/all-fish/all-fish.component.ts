import { Component } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-all-fish',
  templateUrl: './all-fish.component.html',
  styleUrls: ['./all-fish.component.css']
})
export class AllFishComponent {
  constructor(private dataService: DataService) { }
  public fishData: any[] = [];

  ngOnInit() {
    this.dataService.getGoFish().subscribe((data: any[]) => {
      this.fishData = data;
    });
  }
}
