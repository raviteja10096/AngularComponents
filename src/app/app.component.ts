import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  cars: any[] = [{id: 1, name: 'audi'}, {id: 2, name: 'opel'}, {id:3, name: 'bmw'}];
  selectedCars: any[] = [];
  selectedToAdd: any[] = [];
  selectedToRemove: any[] = [];

  chosenCars(event:any){
   this.selectedToAdd = event[0];
   console.log(event[0].name);
  }

  chosenCarsToRemove(event:any) {
    this.selectedToRemove = event[0];
    console.log(event[0].name);
  }

  add() {
    this.selectedCars = this.selectedCars.concat(this.selectedToAdd);
    this.cars = this.cars.filter(car => {
      return this.selectedCars.indexOf(car) < 0;
    });

    this.selectedToAdd = [];
  }

  remove() {
    this.cars = this.cars.concat(this.selectedToRemove);
    console.log(this.cars);
    this.selectedCars = this.selectedCars.filter(selectedCar => {
      return this.cars.indexOf(selectedCar) < 0;
    });
    this.selectedToRemove = [];
  }
  
}
