import { t as tscEmit } from "./tsc-8hYVvCE4.mjs";
import process from "node:process";
import { createBirpc } from "birpc";
//#region src/tsc/worker.ts
createBirpc({ tscEmit }, {
	post: (data) => process.send(data),
	on: (fn) => process.on("message", fn)
});
//#endregion
export {};
