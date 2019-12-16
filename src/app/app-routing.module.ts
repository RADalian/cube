import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeUnitComponent } from './components/cube-unit/cube-unit.component';


const routes: Routes = [
  {
    path: '**',
    component: CubeUnitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
