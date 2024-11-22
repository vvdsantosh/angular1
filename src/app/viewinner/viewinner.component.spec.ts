import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinnerComponent } from './viewinner.component';

describe('ViewinnerComponent', () => {
  let component: ViewinnerComponent;
  let fixture: ComponentFixture<ViewinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
