import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero, HerosService} from '../../services/heros/heros.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styles: []
})
export class HeroSearchComponent implements OnInit {
  heros: Hero[] = [];
  heroSearch: string;

  constructor(private router: Router,
              private herosService: HerosService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.heroSearch = params.heroName;
      this.heros = this.herosService.getHerosByName(params.heroName);
    });
  }

  showMore(index: number) {
    this.router.navigate(['hero-detail', index]);
  }
}
