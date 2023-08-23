import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class DataService {

	private API_LOCALHOST: string = "http://localhost:5001";
	private API_LOCALKEY: string = "abrradiology";
	constructor(private http: HttpClient) { }

	// TODO: this should be loaded into the state so that it doesn't have to make multiple calls
	// Add RXJS later to make this call one time and then use the state to populate components with data
	getGoFish(): Observable<any[]> {
		const reqQuery = { apikey: this.API_LOCALKEY }
		return this.http.get<any[]>(`${this.API_LOCALHOST}/gofish`, { params: reqQuery });
	}
}
