/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glow1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-1", "./Glow1/costumes/Glow-1.svg", {
        x: 23.99989546783553,
        y: 39
      })
    ];

    this.sounds = [new Sound("pop", "./Glow1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player2NpcLives == 0) {
        this.visible = true;
      }
      yield;
    }
  }
}
