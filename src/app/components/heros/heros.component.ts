import {Component, OnInit} from '@angular/core';
import {Hero, HerosService} from '../../services/heros/heros.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent implements OnInit {
  heros: Hero[] = [];

  constructor(private router: Router,
              private herosService: HerosService) {
  }

  ngOnInit() {
    this.heros = this.herosService.getHeros();
  }

  showMore(index: number) {
    this.router.navigate(['hero-detail', index]);
  }

}
