/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 151,
        y: 72
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound("Car Horn", "./Sprite1/sounds/Car Horn.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-11, 121);
    this.direction = 90;
    this.size = 30;
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.direction -= 5;
      }
      if (this.keyPressed("right arrow")) {
        this.direction += 5;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }

  *whenKeySpacePressed() {
    yield* this.startSound("Car Horn");
    while (!this.touching(Color.rgb(0, 0, 0))) {
      this.move(3);
      yield;
    }
    this.move(-3);
  }

  *whenGreenFlagClicked3() {
    while (true) {
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }
}
