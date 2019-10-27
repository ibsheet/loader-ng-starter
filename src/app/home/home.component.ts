import { Component, OnInit } from '@angular/core';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'IBSheetLoader for Angular';
  ngOnInit() {
    loader.unload();
  }
}
