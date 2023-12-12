import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupProductComponent } from './signup-product.component';

describe('SignupProductComponent', () => {
  let component: SignupProductComponent;
  let fixture: ComponentFixture<SignupProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupProductComponent]
    });
    fixture = TestBed.createComponent(SignupProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
