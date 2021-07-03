/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balloon1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Balloon1/costumes/balloon1-a.svg", {
        x: 29.333283499878632,
        y: 91.51375755539334
      }),
      new Costume("balloon1-b", "./Balloon1/costumes/balloon1-b.svg", {
        x: 28.833283499878632,
        y: 91.56375755539335
      })
    ];

    this.sounds = [new Sound("Pop", "./Balloon1/sounds/Pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(this.random(-200, 180), this.random(-250, -150));
    for (let i = 0; i < 4; i++) {
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.goto(this.random(-200, 180), this.random(-250, -150));
    while (true) {
      if (this.stage.vars.player1Lives == 0) {
        this.visible = true;
        this.costume = "balloon1-b";
        for (let i = 0; i < 100; i++) {
          this.y += 5;
          yield* this.wait(0.025);
          yield;
        }
      }
      if (this.stage.vars.player2NpcLives == 0) {
        this.costume = "balloon1-a";
        this.visible = true;
        for (let i = 0; i < 100; i++) {
          this.y += 5;
          yield* this.wait(0.025);
          yield;
        }
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
