import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 1rem;
      }
    `
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activateRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  setActivateRegion(activateRegion: string): void {
    if (activateRegion === this.activateRegion) return;
    this.activateRegion = activateRegion;
    this.countries = [];
    this.countryService.getCountriesByRegion(this.activateRegion)
      .subscribe(countries => this.countries = countries);
  }

  setActiveRegionSelectedClass(region: string): string {
    return (region === this.activateRegion ? 'btn btn-primary' : 'btn btn-outline-primary')
  }

}
