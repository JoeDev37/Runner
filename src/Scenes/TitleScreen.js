import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {

  preload() {

  }

  create() {

    const width = this.scale.width;
    const height = this.scale.height;
    const title = this.add.text(
      width / 2,
      height / 2,
      "Runner",
      {
        fontSize: 40
      }
    )
    title.setOrigin(0.5, 0.5);

    console.log('working')
  }
}
