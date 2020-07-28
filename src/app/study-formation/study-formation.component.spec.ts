import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyFormationComponent } from './study-formation.component';

describe('StudyFormationComponent', () => {
  let component: StudyFormationComponent;
  let fixture: ComponentFixture<StudyFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
