import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantoshComponent } from './santosh.component';

describe('SantoshComponent', () => {
  let component: SantoshComponent;
  let fixture: ComponentFixture<SantoshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SantoshComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SantoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
