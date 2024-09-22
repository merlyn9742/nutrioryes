import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    console.log("entra a open");
    
    this.sideNav.open();
  }

}
