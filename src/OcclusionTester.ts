import '@babylonjs/core/Engines/Extensions/engine.occlusionQuery';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder';
import { Scene } from '@babylonjs/core/scene';
import '@babylonjs/core/Materials/standardMaterial';

export class OcclusionTester {
    private occlusionMesh: AbstractMesh;

    constructor(scene: Scene) {
        // Create Meshes with occlusion test:
        const box = MeshBuilder.CreateBox('Box', {size: 1.0}, scene);
        box.setAbsolutePosition(Vector3.Zero());

        this.occlusionMesh = MeshBuilder.CreateBox('Occlusion_Mesh', {size:0.1}, scene);
        this.occlusionMesh.setAbsolutePosition(new Vector3(1.0,0.0,0.0));
        this.occlusionMesh.occlusionType = AbstractMesh.OCCLUSION_TYPE_STRICT;
    }

    public update() {
        const occludedText = this.occlusionMesh.isOccluded ? 'Occluded' : 'Not Occluded';
        console.log(occludedText);
    }
}