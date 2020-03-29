import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { viewEventComponent } from './home/viewEvent.component';
import { EventComponent } from './event/event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'viewevents', component: EventComponent },
  { path: 'addevents', component: viewEventComponent },
  { path: '', redirectTo: '/viewevents', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
