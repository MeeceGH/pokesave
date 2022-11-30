import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-showcase',
  templateUrl: './pokemon-showcase.component.html',
  styleUrls: ['./pokemon-showcase.component.css']
})
export class PokemonShowcaseComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.fragment) {
      console.log('displaying favorites');
    } else {
      console.log('displaying list');
    };
  }

}
