import { createDebug } from "obug";
import path from "node:path";
//#region src/tsc/context.ts
const debug = createDebug("rolldown-plugin-dts:tsc-context");
function createContext() {
	return {
		programs: [],
		files: /* @__PURE__ */ new Map(),
		projects: /* @__PURE__ */ new Map()
	};
}
function invalidateContextFile(context, file) {
	file = path.resolve(file).replaceAll("\\", "/");
	debug(`invalidating context file: ${file}`);
	context.files.delete(file);
	context.programs = context.programs.filter((program) => {
		return !program.getSourceFiles().some((sourceFile) => sourceFile.fileName === file);
	});
	context.projects.clear();
}
const globalContext = createContext();
//#endregion
export { createContext, globalContext, invalidateContextFile };
