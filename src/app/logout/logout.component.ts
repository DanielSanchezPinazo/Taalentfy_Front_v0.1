import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '../servicios/admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  //private user = ;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.adminService.setUser('');
    this.router.navigateByUrl('login');
  }

}


