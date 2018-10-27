import { Component, OnInit } from '@angular/core';

import { GameService } from 'src/app/_common/services/game/game.service';
import { Game } from 'src/app/_common/models/game';

@Component({
  selector: 'ksu-gdc-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService.getAll()
      .then((games) => this.games = games);
  }
}
