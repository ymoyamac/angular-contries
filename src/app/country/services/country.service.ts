import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _countryApiURL: string = `https://restcountries.com/v3.1`;
  private _fields: string = 'name,capital,population,flags,cca2';

  get params(): HttpParams {
    return new HttpParams().set('fields', this._fields);
  }

  constructor(private http: HttpClient) { }

  searchCountry(searchTerm: string): Observable<Country[]> {
    const url: string = `${this._countryApiURL}/name/${searchTerm}?fields=${this._fields}`;
    return this.http.get<Country[]>(url);
  }

  searchCapital(searchTerm: string): Observable<Country[]> {
    const url: string = `${this._countryApiURL}/capital/${searchTerm}?fields=${this._fields}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByCode(countryId: string): Observable<Country> {
    const url: string = `${this._countryApiURL}/alpha/${countryId}`;
    return this.http.get<Country>(url, { params: this.params });
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url: string = `${this._countryApiURL}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.params })
      .pipe(tap(console.log));
  }
}
