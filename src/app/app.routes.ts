import { Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados';

export const routes: Routes = [
  { path: '', component: EmpleadosComponent },
  { path: 'empleados', component: EmpleadosComponent }
];
