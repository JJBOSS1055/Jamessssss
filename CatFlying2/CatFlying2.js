/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CatFlying2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cat flying-a", "./CatFlying2/costumes/cat flying-a.svg", {
        x: 53.52940381552557,
        y: 35.21158750000001
      })
    ];

    this.sounds = [new Sound("Pop", "./CatFlying2/sounds/Pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(150, -30);
    this.direction = 90;
    while (true) {
      this.stage.vars.redPosX = this.x;
      this.stage.vars.redPosY = this.y;
      this.stage.vars.redPosR = this.direction;
      if (this.keyPressed("up arrow")) {
        this.direction = 180;
        this.move(-10);
      }
      if (this.keyPressed("down arrow")) {
        this.direction = 0;
        this.move(-10);
      }
      if (this.keyPressed("left arrow")) {
        this.direction = 90;
        this.move(-10);
      }
      if (this.keyPressed("right arrow")) {
        this.direction = -90;
        this.move(-10);
      }
      if (
        this.stage.vars.player1Lives < 1 ||
        this.stage.vars.player2NpcLives < 1
      ) {
        /* TODO: Implement stop other scripts in sprite */ null;
        return;
      }
      yield;
    }
  }
}
