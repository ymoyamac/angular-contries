import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {
  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

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

  search
}
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
