import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import loader from '@ibsheet/loader';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/',
  main: 'ibsheet.js',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

// loader.load()

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'loader-ng-starter';
  loaderVersion = loader.version;
}
