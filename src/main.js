
import phaser from "phaser"
import TitleScreen from "../Scenes/TitleScreen"

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
game.scene.add('title-screen', TitleScreen)
game.scene.start('title-screen');

