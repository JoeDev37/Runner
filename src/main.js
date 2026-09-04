
import phaser from "phaser"
import TitleScreen from "./Scenes/TitleScreen"
import Game from "./Scenes/game";

const config = {
  type: Phaser.AUTO,
  width: innerWidth,
  height: innerHeight,

  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    },
  },
}

const game = new phaser.Game(config);
game.scene.add('title-screen', TitleScreen);
game.scene.add('game', Game);
// game.scene.start('title-screen');
game.scene.start('game')
