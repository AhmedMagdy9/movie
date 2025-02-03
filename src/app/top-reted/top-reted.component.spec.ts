import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRetedComponent } from './top-reted.component';

describe('TopRetedComponent', () => {
  let component: TopRetedComponent;
  let fixture: ComponentFixture<TopRetedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRetedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRetedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
