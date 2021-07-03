/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glow2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-2", "./Glow2/costumes/Glow-2.svg", {
        x: 28,
        y: 40.99984556271383
      })
    ];

    this.sounds = [new Sound("pop", "./Glow2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.visible = true;
      }
      yield;
    }
  }
}
