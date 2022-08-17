import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrHideComponentComponent } from './show-or-hide-component.component';

describe('ShowOrHideComponentComponent', () => {
  let component: ShowOrHideComponentComponent;
  let fixture: ComponentFixture<ShowOrHideComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrHideComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOrHideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
