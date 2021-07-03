/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowA extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-A", "./GlowA/costumes/Glow-A.svg", {
        x: 35.99999999999997,
        y: 37
      }),
      new Costume("Glow-A2", "./GlowA/costumes/Glow-A2.svg", { x: 36, y: 37 })
    ];

    this.sounds = [new Sound("pop", "./GlowA/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-A2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-A";
        this.visible = true;
      }
      yield;
    }
  }
}
