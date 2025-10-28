import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpleadosComponent } from './empleados';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('EmpleadosComponent', () => {
  let component: EmpleadosComponent;
  let fixture: ComponentFixture<EmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosComponent, HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
