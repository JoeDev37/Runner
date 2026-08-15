import Phaser from "phaser";
import WebFontFile from "./FontLoader";

export default class Game extends Phaser.Scene {
  preload() {
    const fonts = new WebFontFile(this.load, "Press Start 2P");
    this.load.addFile(fonts);
  }

  create() {

    const width = this.scale.width;
    const height = this.scale.height;
    const MC_Color = "0xcba6f7"

    this.MC = this.add.rectangle(width / 2, height / 1.05, 50, 50, MC_Color);
    this.physics.add.existing(this.MC);

    this.MC.body.setCollideWorldBounds(true, 1, 1);

    this.cursors = this.input.keyboard.createCursorKeys()
  }


  update() {

    const body = this.MC.body;

    if (this.cursors.right.isDown) {
      this.MC.x += 10;
      body.updateFromGameObject();
    } else if (this.cursors.left.isDown) {
      this.MC.x -= 10;
      body.updateFromGameObject();
    }
  }
}
