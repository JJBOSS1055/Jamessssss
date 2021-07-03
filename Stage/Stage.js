/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Blue Sky", "./Stage/costumes/Blue Sky.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Blue Sky 2 ", "./Stage/costumes/Blue Sky 2 .svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.redPosX = -10;
    this.vars.redPosY = -200;
    this.vars.bluePosX = -30;
    this.vars.bluePosY = 0;
    this.vars.bluePosR = 180;
    this.vars.redPosR = -90;
    this.vars.player1Lives = 4;
    this.vars.player2NpcLives = 0;

    this.watchers.player1Lives = new Watcher({
      label: "Player 1 Lives",
      style: "normal",
      visible: true,
      value: () => this.vars.player1Lives,
      x: 243,
      y: 174
    });
    this.watchers.player2NpcLives = new Watcher({
      label: "Player 2/NPC lives",
      style: "normal",
      visible: true,
      value: () => this.vars.player2NpcLives,
      x: 547,
      y: 180
    });
  }
}
