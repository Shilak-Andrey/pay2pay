import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransitsComponent } from './transits/transits.component'
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'create', component: TransitsComponent},
  { path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
