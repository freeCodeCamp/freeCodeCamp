import { c as validateOption, t as RolldownBuild, u as PluginDriver } from "./rolldown-build-DSxL8qiP.mjs";
//#region src/api/rolldown/index.ts
/**
* The API compatible with Rollup's `rollup` function.
*
* Unlike Rollup, the module graph is not built until the methods of the bundle object are called.
*
* @param input The input options object.
* @returns A Promise that resolves to a bundle object.
*
* @example
* ```js
* import { rolldown } from 'rolldown';
*
* let bundle, failed = false;
* try {
*   bundle = await rolldown({
*     input: 'src/main.js',
*   });
*   await bundle.write({
*     format: 'esm',
*   });
* } catch (e) {
*   console.error(e);
*   failed = true;
* }
* if (bundle) {
*   await bundle.close();
* }
* process.exitCode = failed ? 1 : 0;
* ```
*
* @category Programmatic APIs
*/
const rolldown = async (input) => {
	validateOption("input", input);
	return new RolldownBuild(await PluginDriver.callOptionsHook(input));
};
//#endregion
export { rolldown as t };
