import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpiteComponent } from './palpite-component';

describe('PalpiteComponent', () => {
  let component: PalpiteComponent;
  let fixture: ComponentFixture<PalpiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalpiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalpiteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
