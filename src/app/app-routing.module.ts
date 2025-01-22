import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageListaComponent } from './pages/homepage-lista/homepage-lista.component';
import { AggiungiTaskComponent } from './pages/aggiungi-task/aggiungi-task.component';
import { DettaglioTaskComponent } from './pages/dettaglio-task/dettaglio-task.component';
import { ModificaTaskComponent } from './pages/modifica-task/modifica-task.component';

const routes: Routes = [
  { path: '', component: HomepageListaComponent },
  { path: 'aggiungi', component: AggiungiTaskComponent },
  { path: 'dettaglio/:id', component: DettaglioTaskComponent },
  { path: 'modifica/:id', component: ModificaTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
