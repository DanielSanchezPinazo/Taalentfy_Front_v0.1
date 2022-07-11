
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidatoComponent } from './candidato/candidato.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { OfertaComponent } from './oferta/oferta.component';
import { CandidaturaComponent } from './candidatura/candidatura.component';
import { AdminComponent } from './admin/admin.component';
import { SharedBarComponent } from './shared/sharedbar/sharedBar.component';
import { LoginComponent } from './login/login.component';
import { LoggedGuard } from './guards/logged.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent, pathMatch:'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'shared', component: SharedBarComponent, canActivate: [LoggedGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [LoggedGuard] },
  { path: 'candidato', component: CandidatoComponent, canActivate: [LoggedGuard] },
  { path: 'empresa', component: EmpresaComponent, canActivate: [LoggedGuard] },
  { path: 'oferta', component: OfertaComponent, canActivate: [LoggedGuard] },
  { path: 'candidatura', component: CandidaturaComponent, canActivate: [LoggedGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [LoggedGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
