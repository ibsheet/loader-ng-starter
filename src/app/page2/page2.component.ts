import { Component, OnInit, OnDestroy } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, OnDestroy {
  sheetId = 'sheet';
  ngOnInit() {
    const { options, data } = SheetSampleData[1];
    loader.createSheet({
      id: this.sheetId,
      el: 'sheetContainer',
      options,
      data
    });
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId);
  }
}
