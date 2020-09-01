import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: 'main', component: DisplayComponent },
  { path: 'repo', component: RepoComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [DisplayComponent, RepoComponent];
