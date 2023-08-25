import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from 'src/services/data.service';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

import { AppComponent } from './app.component';
import { FishThumbnailComponent } from './fish-thumbnail/fish-thumbnail.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FishDetailsComponent } from './fish-details/fish-details.component';
import { fishListReducer } from 'src/store/fish-list.reducer';
import { AllFishComponent } from './all-fish/all-fish.component';

@NgModule({
	declarations: [
		AppComponent,
		FishThumbnailComponent,
		SanitizeHtmlPipe,
		NavigationBarComponent,
		FishDetailsComponent,
		AllFishComponent
	],
	imports: [
		BrowserModule,
		StoreModule.forRoot({ fishList: fishListReducer }),
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		DataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
