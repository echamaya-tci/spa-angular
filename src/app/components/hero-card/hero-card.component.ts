import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: []
})
export class HeroCardComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index: number;
  @Output() heroSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  showHeroDetail() {
    this.heroSelected.emit(this.index);
  }

}
