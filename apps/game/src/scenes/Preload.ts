import Phaser from "phaser";
import { ScenesKey } from "../const/ScenesKey";

export default class Preload extends Phaser.Scene {
  constructor() {
    super(ScenesKey.PRELOADER);
  }

  preload() {}

  create() {
    this.scene.start(ScenesKey.GAME);
  }
}
