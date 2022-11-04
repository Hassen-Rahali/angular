import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { AjouterFormComponent } from './ajouter-form/ajouter-form.component';
import {FormsModule} from "@angular/forms";
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    AjouterFormComponent,
    NotfoundComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
