/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowI extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-I", "./GlowI/costumes/Glow-I.svg", {
        x: 20.999928178616244,
        y: 37.999642251325724
      }),
      new Costume("Glow-I2", "./GlowI/costumes/Glow-I2.svg", {
        x: 20.999929089308097,
        y: 37.99964612566282
      })
    ];

    this.sounds = [new Sound("pop", "./GlowI/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-I2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-I";
        this.visible = true;
      }
      yield;
    }
  }
}
