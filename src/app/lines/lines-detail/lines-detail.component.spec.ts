import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesDetailComponent } from './lines-detail.component';

describe('LinesDetailComponent', () => {
  let component: LinesDetailComponent;
  let fixture: ComponentFixture<LinesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
