/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowS extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-S", "./GlowS/costumes/Glow-S.svg", {
        x: 27,
        y: 40.00009969770554
      }),
      new Costume("Glow-S2", "./GlowS/costumes/Glow-S2.svg", {
        x: 27.00000000000003,
        y: 40.00009939541113
      })
    ];

    this.sounds = [new Sound("pop", "./GlowS/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-S";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-S2";
        this.visible = true;
      }
      yield;
    }
  }
}
