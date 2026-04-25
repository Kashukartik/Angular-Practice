import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';

@Component({
  selector: 'app-home-component',
  imports: [HousingLocation],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {}
