import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcomComponent } from './firstcom.component';

describe('FirstcomComponent', () => {
  let component: FirstcomComponent;
  let fixture: ComponentFixture<FirstcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
