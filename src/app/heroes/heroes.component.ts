import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes = HEROES;
  heroes: Hero[] = [];
  selectedHero?: Hero;

  hero: Hero = {
    id: 1,
    name: 'widstorm'
  };

  //constructor() { }
  constructor(private heroService: HeroService) {}

  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  //ngOnInit(): void {}
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
