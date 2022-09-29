import { Component } from '@angular/core';

import { CountriesService } from '../api/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  countries: any = [];
  nonIdependents: any = [];


  constructor(
    private countriesService: CountriesService
  ) {
    this.getCountries();
  }
    getCountries(){
      this.countriesService.getAll()
      .then((country)=>{
        this.countries = country;
      })
      .catch((erro) =>{
        console.log(erro);
      })
    }
}
