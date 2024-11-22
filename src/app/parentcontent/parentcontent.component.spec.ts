import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcontentComponent } from './parentcontent.component';

describe('ParentcontentComponent', () => {
  let component: ParentcontentComponent;
  let fixture: ComponentFixture<ParentcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentcontentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
