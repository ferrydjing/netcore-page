import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './pages/status/status.component';
import { WanComponent } from './pages/wan/wan.component';

const routes: Routes = [
  {path: '', redirectTo: '/status', pathMatch: 'full'},
  {path: 'status', component: StatusComponent},
  {path: 'wan', component: WanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
