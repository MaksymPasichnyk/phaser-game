import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.tilemapTiledJSON('world', 'assets/world-map.json');
		this.load.image('oakWoodsTile', 'assets/oak_woods_v1.0/oak_woods_tileset.png');
		this.load.image('bg-1', 'assets/oak_woods_v1.0/background/background_layer_1.png');
		this.load.image('bg-2', 'assets/oak_woods_v1.0/background/background_layer_2.png');
		this.load.image('bg-3', 'assets/oak_woods_v1.0/background/background_layer_3.png');
		this.load.image('fance-1', 'assets/oak_woods_v1.0/decorations/fence_1.png');
		this.load.image('fance-2', 'assets/oak_woods_v1.0/decorations/fence_2.png');
		this.load.image('lamp', 'assets/oak_woods_v1.0/decorations/lamp.png');
		this.load.image('rock-3', 'assets/oak_woods_v1.0/decorations/fence_2.png');
		this.load.image('fance-2', 'assets/oak_woods_v1.0/decorations/fence_2.png');
		// player
		this.load.image('player', 'assets/Warrior/Individual Sprite/Edge-Idle/Warrior_Edge-Idle_1.png')
  }

  create() {
    this.scene.start("PlayScene");
  }
}

export default Preload;
