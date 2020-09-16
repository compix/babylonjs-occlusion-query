// Uncomment to fix the issue:
// import '@babylonjs/core/Rendering/boundingBoxRenderer';
import { Game } from './game';

window.addEventListener('DOMContentLoaded', () => {
    let game = new Game('renderCanvas');
    game.createScene();
    game.run();
});
