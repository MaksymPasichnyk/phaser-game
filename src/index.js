import Phaser from "phaser";
import PlayScene from "./scenes/Play";
import PreloadScene from "./scenes/Preload";

const WIDTH = 1280;
const HEIGHT = 600;

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
};

const Scenes = [PreloadScene, PlayScene];

const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
  // WebGL (Web graphics library) JS API for rendering 2d and 3d graphic
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    // arcade physics plagin manages physics simulation
    default: "arcade",
    arcade: {
      debug: true,
      gravity: {
        //y: 400,
      },
    },
  },
  scene: initScenes(),
};

new Phaser.Game(config);
