import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuBarComponent } from './left-menu-bar.component';

describe('LeftMenuBarComponent', () => {
  let component: LeftMenuBarComponent;
  let fixture: ComponentFixture<LeftMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
