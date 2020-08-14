import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero, HerosService} from '../../services/heros/heros.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero = null;

  constructor(private herosService: HerosService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.hero = this.herosService.getHero(params.id);
    });

  }

  ngOnInit() {
  }

}
