/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GlowE extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow-E", "./GlowE/costumes/Glow-E.svg", {
        x: 34.000398588901874,
        y: 38.00004898769035
      }),
      new Costume("Glow-E2", "./GlowE/costumes/Glow-E2.svg", {
        x: 34.000394294450956,
        y: 38.00004449384517
      })
    ];

    this.sounds = [new Sound("pop", "./GlowE/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.costume = "Glow-E2";
        this.visible = true;
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "Glow-E";
        this.visible = true;
      }
      yield;
    }
  }
}
