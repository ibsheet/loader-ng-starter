import { Component, OnInit, OnDestroy } from '@angular/core'
import loader from '@ibsheet/loader'
import { SheetSampleData } from 'src/shared/ibsheet-data';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {
  sheetId = '';
  ngOnInit() {
    const A = this;
    const { options, data } = SheetSampleData[0]
    loader.createSheet({
      el: 'sheetContainer',
      options,
      data
    }).then((sheet: { id: any; }) => {
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      A.sheetId = sheet.id;
      console.log('created sheet', sheet.id);
    })
  }
  ngOnDestroy() {
    loader.removeSheet(this.sheetId)
  }
}