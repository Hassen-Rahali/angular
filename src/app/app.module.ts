import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterStageComponent } from './ajouter-stage/ajouter-stage.component';
import { HeaderComponent } from './header/header.component';
import { ListeStageComponent } from './liste-stage/liste-stage.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AjouterStageComponent,
    HeaderComponent,
    ListeStageComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
