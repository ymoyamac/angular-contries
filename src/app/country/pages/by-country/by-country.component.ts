import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer
      }
    `
  ]
})
export class ByCountryComponent {

  @Input() placeholder: string ='';
  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCountryByName(searchTerm: string): void {
    this.hasError = false;
    this.searchTerm = searchTerm;
    this.countryService.searchCountry(this.searchTerm)
      .subscribe(countries => {
        this.countries = countries;
      }, (error: unknown) => {
        this.hasError = true;
        this.countries = [];
      });
  }

  suggestions(term: string): void {
    this.hasError = false;
    this.countryService.searchCountry(term)
      .subscribe(countries => {
        this.suggestCountries = countries.splice(0, 5);
      }, (error: unknown) => {
        this.suggestCountries = [];
      });
  }
}
