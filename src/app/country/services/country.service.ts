import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _countryApiURL: string = `https://restcountries.com/v3.1`;

  constructor(private http: HttpClient) { }

  searchCountry(searchTerm: string): Observable<Country[]> {
    const url: string = `${this._countryApiURL}/name/${searchTerm}`;
    return this.http.get<Country[]>(url);
  }
}
