import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiLevFuncComponent } from './hi-lev-func.component';

describe('HiLevFuncComponent', () => {
  let component: HiLevFuncComponent;
  let fixture: ComponentFixture<HiLevFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiLevFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiLevFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
