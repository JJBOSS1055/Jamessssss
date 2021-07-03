/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button2/costumes/button2-a.svg", {
        x: 58.982,
        y: 29.212999999999994
      })
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 25;
    this.stage.vars.player1Lives = 5;
    while (true) {
      while (!this.mouse.down) {
        this.direction = this.stage.vars.bluePosR;
        if (this.stage.vars.bluePosR == 0) {
          this.goto(
            this.stage.vars.bluePosX - -30,
            this.stage.vars.bluePosY - -40
          );
        }
        if (this.stage.vars.bluePosR == 180) {
          this.goto(
            this.stage.vars.bluePosX - 30,
            this.stage.vars.bluePosY - 40
          );
        }
        if (this.stage.vars.bluePosR == -90) {
          this.goto(
            this.stage.vars.bluePosX - 40,
            this.stage.vars.bluePosY - -30
          );
        }
        if (this.stage.vars.bluePosR == 90) {
          this.goto(
            this.stage.vars.bluePosX - -40,
            this.stage.vars.bluePosY - 30
          );
        }
        yield;
      }
      this.visible = true;
      for (let i = 0; i < 100; i++) {
        this.move(5);
        yield* this.wait(0.025);
        if (this.touching(this.sprites["CatFlying2"].andClones())) {
          this.stage.vars.player2NpcLives += -1;
          this.goto(this.stage.vars.bluePosX, this.stage.vars.bluePosY);
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
