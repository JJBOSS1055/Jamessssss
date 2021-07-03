/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowW extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-W", "./GlowW/costumes/Glow-W.svg", {
        x: 44.99999999999997,
        y: 40.999999999999915
      }),
      new Costume("Glow-W2", "./GlowW/costumes/Glow-W2.svg", { x: 45, y: 41 })
    ];

    this.sounds = [new Sound("pop", "./GlowW/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-W2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-W";
        this.visible = true;
      }
      yield;
    }
  }
}
