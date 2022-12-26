import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRefTestComponent } from './element-ref-test.component';

describe('ElementRefTestComponent', () => {
  let component: ElementRefTestComponent;
  let fixture: ComponentFixture<ElementRefTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementRefTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementRefTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
