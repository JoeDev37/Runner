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
    const MC_Color = "0xcba6f7";

    this.MC = this.add.rectangle(
      width / 2,
      height - 50,
      50,
      50,
      MC_Color
    );

    this.physics.add.existing(this.MC);

    const body = this.MC.body;

    body.setCollideWorldBounds(true);
    body.setGravityY(500);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const body = this.MC.body;

    // Movement
    if (this.cursors.right.isDown) {
      body.setVelocityX(400);
    } else if (this.cursors.left.isDown) {
      body.setVelocityX(-400);
    } else {
      body.setVelocityX(0);
    }

    // Jump
    if (
      Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
      body.blocked.down
    ) {
      body.setVelocityY(-330);
    }
  }
}
