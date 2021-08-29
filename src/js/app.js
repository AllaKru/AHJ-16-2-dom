/* eslint-disable no-plusplus */

import gameTemplateRows from './app.template';
// eslint-disable-next-line
import engine from './engine';
import Goblin from './goblin';

export default class Game {
  constructor(number, interval) {
    this.number = number;
    this.interval = interval;
  }

  rule() {
    return this.number;
  }

  play() {
    let i = 0;
    while (i < this.number) {
      engine(gameTemplateRows());
      i++;
    }
    setInterval(() => Goblin(), this.interval);
  }
}

export const first = new Game(4, 1000);
first.play();
