A minimal project showcasing the babylonjs occlusion query issue as described here: https://forum.babylonjs.com/t/occlusion-query-usage-without-inspector/14154

**Expected behaviour**: In the developer console the message changes from "Not Occluded" to "Occluded" as soon as the small cube is occluded by the big cube. The log keeps printing "Not Occluded" however.

**Fix**: Uncomment `import '@babylonjs/core';` in index.ts.

## How to Start? ##

1. Download and Install Node.js
2. Open Commandline and Enter
```
npm install 
npm start
```
3. Open Browser and Enter [http://localhost:8080](http://localhost:8080)

## Deployable Product Build ##
1. Build the app
```
npm run build
```
2. Deployable app is in dist folder now
