import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyWidget } from './heavy-widget';

describe('HeavyWidget', () => {
  let component: HeavyWidget;
  let fixture: ComponentFixture<HeavyWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
