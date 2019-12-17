import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeUnitComponent } from './components/cube-unit/cube-unit.component';
import { CubeMatrixComponent } from './components/cube-matrix/cube-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeUnitComponent,
    CubeMatrixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
