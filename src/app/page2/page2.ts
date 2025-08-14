import { Component } from '@angular/core';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 {
  sheetId = '';
  ngOnInit(): void {
    const A = this;
    const { options, data } = SheetSampleData[1];
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet: { id: any; }) => {
      A.sheetId = sheet.id;
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      console.log('created sheet', sheet.id);
    });
  }
  ngOnDestroy(): void {
    loader.removeSheet(this.sheetId);
  }
}
