import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ControladorService } from './services/controlador.service';
import { ListaComponent } from './lista/lista.component';
import { AdicionarComponent } from './adicionar/adicionar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, CabecalhoComponent, ListaComponent, AdicionarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ControladorService]
})
export class AppModule { }
