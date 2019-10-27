import { Component, OnInit, OnDestroy } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  sheetId = 'sheet';
  ngOnInit() {
    const { options, data } = SheetSampleData[0];
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
