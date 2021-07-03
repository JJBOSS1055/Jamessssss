/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowY extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-Y", "./GlowY/costumes/Glow-Y.svg", {
        x: 38,
        y: 40.99999999999997
      }),
      new Costume("Glow-Y2", "./GlowY/costumes/Glow-Y2.svg", { x: 38, y: 41 })
    ];

    this.sounds = [new Sound("pop", "./GlowY/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-Y2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-Y";
        this.visible = true;
      }
      yield;
    }
  }
}
