import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpImplementationComponent } from './http-implementation.component';

describe('HttpImplementationComponent', () => {
  let component: HttpImplementationComponent;
  let fixture: ComponentFixture<HttpImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpImplementationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
