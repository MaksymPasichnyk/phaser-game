import Phaser from "phaser";

class Play extends Phaser.Scene {

	constructor() {
		super('PlayScene')
	}

	preload() {
		this.load.image('wood', '/assets/oak_woods_v1.0/background/background_layer_1.png')
	}

	create() {
		this.add.image(0, 0, 'wood').setOrigin(0);
	}
}

export default Play;