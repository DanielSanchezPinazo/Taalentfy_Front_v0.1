import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AdminService } from '../servicios/admin.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  // Creamos una variable que guarde el resultado de la suscripción.
  userLogged = false;

  // Vamos a usar el Adminservice en el constructor para controlar si el usuario está logado.
  constructor(private adminService: AdminService) {

    this.adminService.getUser().subscribe(user => {

      if (user.Id) {

        this.userLogged = true;
      
      } else { 
        
        this.userLogged = false; 
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      return this.userLogged;
  }
}
