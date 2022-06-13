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
    }).then((sheet: { id: any; }) => {
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      console.log('created sheet', sheet.id);
    });;
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId);
  }
}
