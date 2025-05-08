import "./style.css";
import Phaser from "phaser";
import Game from "./scenes/Game";
import Preload from "./scenes/Preload";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game",
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "#000000",
  scene: [Preload, Game],
  physics: {
    default: "matter",
    matter: {
      gravity: {
        y: 0,
        x: 0,
      },
    },
  },
};

export default new Phaser.Game(config);
