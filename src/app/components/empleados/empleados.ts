import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadoService, Empleado } from '../../services/empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent implements OnInit {
  empleado: Empleado = {
    nombre: '',
    apellido: '',
    correo: '',
    salario: 0
  };

  empleados: Empleado[] = [];
  submitted = false;
  loading = false;
  loadingList = false;

  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.loadingList = true;
    this.empleadoService.getEmpleados().subscribe({
      next: (empleados) => {
        console.log('📊 Empleados recibidos:', empleados);

        // Probar diferentes métodos:
        this.empleados = [...empleados]; // <- Cambiar a esto
        // this.empleados = empleados.slice(); // <- O esto

        console.log('🔢 Cantidad después de asignar:', this.empleados.length);
        this.loadingList = false;
      },
      error: (error) => {
        console.error('Error al cargar empleados:', error);
        this.loadingList = false;
      }
    });
  }

  onSubmit() {
     this.loading = true;
    this.empleadoService.createEmpleado(this.empleado).subscribe({
      next: (response) => {
        this.loading = false;
        this.submitted = true;
        alert('✅ Empleado creado exitosamente!');

        this.empleado = { nombre: '', apellido: '', correo: '', salario: 0 };

        // 🔥 Recargar después de 500ms para asegurar
        setTimeout(() => {
          this.cargarEmpleados();
        }, 500);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al crear empleado:', error);
        alert('❌ Error al crear empleado');
      }
    });
  }

  formatearSalario(salario: number): string {
    const salarioNumero = Number(salario);
    if (isNaN(salarioNumero)) {
      return '$0.00';
    }
    return `$${salarioNumero.toFixed(2)}`;
  }
}
