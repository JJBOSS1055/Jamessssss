/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowP extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-P", "./GlowP/costumes/Glow-P.svg", {
        x: 31.99999999999997,
        y: 38.99976390593278
      }),
      new Costume("Glow-P2", "./GlowP/costumes/Glow-P2.svg", {
        x: 32,
        y: 38.99976695296638
      })
    ];

    this.sounds = [new Sound("pop", "./GlowP/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-P2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-P";
        this.visible = true;
      }
      yield;
    }
  }
}
