import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1 } from './page1';

describe('Page1', () => {
  let component: Page1;
  let fixture: ComponentFixture<Page1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
