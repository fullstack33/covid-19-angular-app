import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDistrictWiseComponent } from './state-district-wise.component';

describe('StateDistrictWiseComponent', () => {
  let component: StateDistrictWiseComponent;
  let fixture: ComponentFixture<StateDistrictWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDistrictWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDistrictWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
