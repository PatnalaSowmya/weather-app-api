import { Component } from '@angular/core';
import { WeatherData } from './mode/weatherModel';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weather: WeatherData | undefined;
  cityName: string = 'Delhi';
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather(this.cityName);
  }

  onSubmit() {
    this.getWeather(this.cityName);
    this.cityName = '';
  }
  getWeather(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (res) => {
        this.weather = res;
        console.log(res);
      },

      error: (error) => {
        alert("This location doesn't exist in data");
      },
    });
  }
}
