import { Component } from '@angular/core';
import loader from '@ibsheet/loader';

loader.config({
  registry: {
    name: 'ibsheet',
    baseUrl: '/assets/ibsheet'
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaderVersion = loader.version;
}
