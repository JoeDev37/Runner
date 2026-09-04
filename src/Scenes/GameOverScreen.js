

import Phaser from "phaser";
import WebFontFile from "./FontLoader";

export default class GameOverScreen extends Phaser {

  preload() {
    const fonts = new WebFontFile(this.load, "Press Start 2P");
    this.load.addFile(fonts);
  }

  create() {
    
  }
}
