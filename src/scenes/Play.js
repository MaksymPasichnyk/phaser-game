import Phaser from "phaser";

class Play extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
		const map = this.createMap();
		const layers =  this.createLayers(map);

		// player
		this.createPlayer();
  }

	createMap() {
    const map = this.make.tilemap({ key: "world" });
    map.addTilesetImage(
      "oak_woods_tileset",
      "oakWoodsTile"
    );
    map.addTilesetImage("background_layer_1", "bg-1");
    map.addTilesetImage("background_layer_2", "bg-2");
    map.addTilesetImage("background_layer_3", "bg-3");
    map.addTilesetImage("fance_1", "fance-1");
    map.addTilesetImage("fance_2", "fance-2");
    map.addTilesetImage("lamp", "lamp");
    map.addTilesetImage("rock_3", "rock-3");
    map.addTilesetImage("shop", "fance-2");

		return map
	}

	createLayers(map) {
		const oakWoodsTile = map.getTileset('oak_woods_tileset');
		const bg1 = map.getTileset('background_layer_1');
		const bg2 = map.getTileset('background_layer_2');
		const bg3 = map.getTileset('background_layer_3');
		const lamp = map.getTileset('lamp');

		const platforms = map.createStaticLayer("platforms", oakWoodsTile);
		const bgLayer1 = map.createStaticLayer("bg_layer_1", bg1);
		const bgLayer2 =  map.createStaticLayer("bg_layer_2", bg2);
    const bgLayer3 = map.createStaticLayer("bg_layer_3", bg3);
		const environment = map.createStaticLayer("environment", lamp);
    const ground = map.createStaticLayer("ground", oakWoodsTile);

		return {
			platforms,
			bgLayer1,
			bgLayer2,
			bgLayer3,
			environment,
			ground
		}
	}

	createPlayer() {
		const player = this.physics.add.sprite(100, 250, 'player');
	}
}

export default Play;
