/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowR extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-R", "./GlowR/costumes/Glow-R.svg", {
        x: 34.99987893430142,
        y: 38.00238964470239
      }),
      new Costume("Glow-R2", "./GlowR/costumes/Glow-R2.svg", {
        x: 34.99987946715069,
        y: 38.00238482235116
      })
    ];

    this.sounds = [new Sound("pop", "./GlowR/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-R2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-R";
        this.visible = true;
      }
      yield;
    }
  }
}
