import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CandidatoComponent } from './candidato/candidato.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { OfertaComponent } from './oferta/oferta.component';
import { CandidaturaComponent } from './candidatura/candidatura.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatoComponent,
    EmpresaComponent,
    OfertaComponent,
    CandidaturaComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
