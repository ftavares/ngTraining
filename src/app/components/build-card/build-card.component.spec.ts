import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCardComponent } from './build-card.component';

describe('BuildCardComponent', () => {
  let component: BuildCardComponent;
  let fixture: ComponentFixture<BuildCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
