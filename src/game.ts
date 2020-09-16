import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Engine } from '@babylonjs/core/Engines';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths';
import { Scene } from '@babylonjs/core/scene';
import { GameUtils } from './game-utils';
import { OcclusionTester } from './OcclusionTester';

export class Game {
    private canvas: HTMLCanvasElement;
    private engine: Engine;
    private scene: Scene;
    private camera: ArcRotateCamera;

    private occlusionTester: OcclusionTester;
    
    constructor(canvasElement: string) {
        this.canvas = <HTMLCanvasElement>document.getElementById(canvasElement);
        this.engine = new Engine(this.canvas, true);
    }

    /**
     * Creates the BABYLONJS Scene
     */
    createScene(): void {
        this.scene = new Scene(this.engine);
        this.camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 4, 30, Vector3.Zero(), this.scene);
        this.camera.attachControl(this.canvas, true);
        new HemisphericLight("light", new Vector3(0, 1, 0), this.scene);
        //GameUtils.createGround(this._scene);
        //const gui = GameUtils.createGUI();

        this.occlusionTester = new OcclusionTester(this.scene);
    }

    /**
     * Starts the render loop.
     */
    run(): void {
        this.scene.registerBeforeRender(() => {
            this.update();
        });

        // run the render loop
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }

    update() {
        this.occlusionTester.update();
    }
}