import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeUnitComponent } from './components/cube-unit/cube-unit.component';
import { CubeMatrixComponent } from './components/cube-matrix/cube-matrix.component';


const routes: Routes = [
  {
    path: '**',
    component: CubeMatrixComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
