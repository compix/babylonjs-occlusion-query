import { Color3 } from "@babylonjs/core";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Mesh } from "@babylonjs/core/Meshes";
import { Scene } from "@babylonjs/core/scene";
//import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
//import { Control } from "@babylonjs/gui/2D/controls/control";
//import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";

export class GameUtils {
    /**
     * Creates a basic ground
     * @param scene
     */
    public static createGround(scene: Scene): Mesh {
        let groundMaterial = new StandardMaterial("groundMaterial", scene);
        groundMaterial.diffuseColor = new Color3(0.5, 0.5, 0.5);

        let ground = Mesh.CreateGround("ground", 512, 512, 32, scene, false);
        ground.position.y = -1;
        ground.material = groundMaterial;

        return ground;
    }

    /**
     * Creates a Gui Texture
     */
    /*
    public static createGUI() {
        return AdvancedDynamicTexture.CreateFullscreenUI("UI");
    }
    */

    /*
    public static createText(left: number, top: number) {
        let txt = new TextBlock();
        txt.height = "20px";
        txt.width = "500px";
        txt.fontSize = 20;
        txt.text = "";
        txt.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        txt.textVerticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        txt.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        txt.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        txt.left = left;
        txt.top = top;

        return txt;
    }
    */
}