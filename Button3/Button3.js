/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button3/costumes/button2-a.svg", {
        x: 58.982,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Button3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 25;
    this.stage.vars.player2NpcLives = 5;
    while (true) {
      while (!this.keyPressed("space")) {
        this.direction = this.stage.vars.redPosR;
        if (this.stage.vars.redPosR == 0) {
          this.goto(
            this.stage.vars.redPosX - -30,
            this.stage.vars.redPosY - 50
          );
        }
        if (this.stage.vars.redPosR == 180) {
          this.goto(
            this.stage.vars.redPosX - 30,
            this.stage.vars.redPosY - -50
          );
        }
        if (this.stage.vars.redPosR == -90) {
          this.goto(
            this.stage.vars.redPosX - -50,
            this.stage.vars.redPosY - -30
          );
        }
        if (this.stage.vars.redPosR == 90) {
          this.goto(this.stage.vars.redPosX - 50, this.stage.vars.redPosY - 30);
        }
        yield;
      }
      this.visible = true;
      for (let i = 0; i < 100; i++) {
        this.move(-5);
        yield* this.wait(0.025);
        if (this.touching(this.sprites["CatFlying"].andClones())) {
          this.stage.vars.player1Lives += -1;
          this.goto(this.stage.vars.redPosX, this.stage.vars.redPosY);
          this.visible = false;
          yield* this.wait(1);
        }
        yield;
      }
      this.visible = false;
      if (
        this.stage.vars.player1Lives < 1 ||
        this.stage.vars.player2NpcLives < 1
      ) {
        /* TODO: Implement stop other scripts in sprite */ null;
        return;
      }
      yield;
    }
  }
}
