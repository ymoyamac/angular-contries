import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  searchTerm: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCapitalByName(searchTerm: string): void {
    this.hasError = false;
    this.searchTerm = searchTerm;
    this.countryService.searchCapital(this.searchTerm)
      .subscribe(countries => {
        this.countries = countries;
      }, (error: unknown) => {
        this.hasError = true;
        this.countries = [];
      });
  }

  suggestions(term: string): void {

  }
}
