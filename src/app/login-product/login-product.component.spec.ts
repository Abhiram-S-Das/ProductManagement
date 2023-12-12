import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginProductComponent } from './login-product.component';

describe('LoginProductComponent', () => {
  let component: LoginProductComponent;
  let fixture: ComponentFixture<LoginProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginProductComponent]
    });
    fixture = TestBed.createComponent(LoginProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
