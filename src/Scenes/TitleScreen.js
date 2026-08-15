import Phaser from "phaser";
import WebFontFile from "./FontLoader";

export default class TitleScreen extends Phaser.Scene {

  preload() {

    const fonts = new WebFontFile(this.load, "Press Start 2P");
    this.load.addFile(fonts);

  }

  create() {

    const width = this.scale.width;
    const height = this.scale.height;
    const title = this.add.text(
      width / 2,
      height / 2,
      "Runner.",
      {
        fontSize: 40,
        fontFamily: "'Press Start 2P'"
      }
    )
    title.setOrigin(0.5, 0.5);

    const pressStart = this.add.text(width / 1.6, height / 1.7, "Press SPACE To Start", {
      fontFamily: "'Press Start 2P'",
      fontSize: 11,
    })

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game');
    })


    console.log('working');
    console.log('is it tho?');
  }
}
