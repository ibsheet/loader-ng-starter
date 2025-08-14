import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2 } from './page2';

describe('Page2', () => {
  let component: Page2;
  let fixture: ComponentFixture<Page2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
