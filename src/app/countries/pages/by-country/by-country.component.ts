import { LOCALE_ID, Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CountryService } from '../../services/country.service';
import { CountrySearch } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  styles: []
})
export class ByCountryComponent {

  query: string = '';
  isError: boolean = false;
  queryError!: string;
  countriesResult: CountrySearch[] = []

  constructor( private countryService: CountryService) {
    registerLocaleData(localeEs, 'es')
  }

  async search () {
    this.isError = false;

    if(!this.query) {
      this.isError = true;
      this.queryError = 'empty'
    }
      
    if (this.query) {
      this.countryService.searchCountry(this.query)
        .subscribe( 
          (resp) => {
            this.countriesResult = resp;
            console.info(resp);
            this.query = '';
          },
          (error) => {
            this.queryError = this.query.slice();
            this.isError = true;
            this.query = ''; // Limpiar el valor del input
          }
        );
    }
  }

  

}
