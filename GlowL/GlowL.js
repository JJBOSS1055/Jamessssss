/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowL extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-L", "./GlowL/costumes/Glow-L.svg", { x: 33, y: 35 }),
      new Costume("Glow-L2", "./GlowL/costumes/Glow-L2.svg", { x: 33, y: 35 })
    ];

    this.sounds = [new Sound("pop", "./GlowL/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-L2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-L";
        this.visible = true;
      }
      yield;
    }
  }
}
