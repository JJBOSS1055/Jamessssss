/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowN extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-N", "./GlowN/costumes/Glow-N.svg", {
        x: 37.00000000000003,
        y: 39.00001728557373
      }),
      new Costume("Glow-N2", "./GlowN/costumes/Glow-N2.svg", {
        x: 37,
        y: 39.00001864278687
      })
    ];

    this.sounds = [new Sound("pop", "./GlowN/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-N2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-N";
        this.visible = true;
      }
      yield;
    }
  }
}
