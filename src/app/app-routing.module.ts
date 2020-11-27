import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar/listar.component';


const routes: Routes = [
  { path: 'listar', component: ListarComponent }, 
  { path: '',redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**',redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
