import Phaser from "phaser";
import { ScenesKey } from "../const/ScenesKey";
import IslandGenerator from "../game/IslandGenerator";

export default class Game extends Phaser.Scene {
  constructor() {
    super(ScenesKey.GAME);
  }

  create() {
    new IslandGenerator(this);
  }

  update() {}
}
