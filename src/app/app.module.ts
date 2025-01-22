import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AggiungiTaskComponent } from './pages/aggiungi-task/aggiungi-task.component';
import { DettaglioTaskComponent } from './pages/dettaglio-task/dettaglio-task.component';
import { HomepageListaComponent } from './pages/homepage-lista/homepage-lista.component';
import { FormsModule } from '@angular/forms';
import { ModificaTaskComponent } from './pages/modifica-task/modifica-task.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AggiungiTaskComponent,
    DettaglioTaskComponent,
    HomepageListaComponent,
    ModificaTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
