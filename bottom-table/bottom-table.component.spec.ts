import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTableComponent } from './bottom-table.component';

describe('BottomTableComponent', () => {
  let component: BottomTableComponent;
  let fixture: ComponentFixture<BottomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
