import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountrySearch } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private serviceUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }
  
  searchCountry(query: string): Observable<CountrySearch[]> {
    
    const url = `${ this.serviceUrl }/name/${ query }`;

    return this.http.get<CountrySearch[]>(url);
  }
}
