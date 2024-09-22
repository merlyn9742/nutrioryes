import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    {path: '../../../assets/imges/banner_image.png'}
]

  constructor(private _config: NgbCarouselConfig) {
    this._config.interval = 5000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = true;
   }

  ngOnInit(): void {
  }

}
