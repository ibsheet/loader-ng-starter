import { Component } from '@angular/core'
import loader from '@ibsheet/loader'

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'assets/ibsheet'
}
loader.config({
  registry: [ibsheetLib]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaderVersion = loader.version
}