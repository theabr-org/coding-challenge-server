import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from 'src/services/data.service';
import { FishOptionComponent } from './fish-option/fish-option.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';

@NgModule({
	declarations: [
		AppComponent,
		FishOptionComponent,
  SanitizeHtmlPipe
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		DataService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
