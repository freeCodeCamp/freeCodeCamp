#!/usr/bin/env node
import process from "node:process";
//#region src/cli.ts
function parseCLIArguments(argv) {
	let debug = false;
	let preset;
	let filePath;
	const beforeArgs = [];
	const afterArgs = [];
	let expectFilePathAfterDelimiter = false;
	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (filePath !== void 0) {
			if (argument === "--") {
				afterArgs.push(...argv.slice(index + 1));
				break;
			}
			afterArgs.push(argument);
			continue;
		}
		if (expectFilePathAfterDelimiter) {
			filePath = argument;
			expectFilePathAfterDelimiter = false;
			continue;
		}
		if (argument === "--") {
			expectFilePathAfterDelimiter = true;
			beforeArgs.push(argument);
			continue;
		}
		if (argument === "--debug") {
			debug = true;
			beforeArgs.push(argument);
			continue;
		}
		if (argument === "--no-debug") {
			debug = false;
			beforeArgs.push(argument);
			continue;
		}
		if (argument.startsWith("--preset=")) {
			preset = argument.slice(9);
			beforeArgs.push(argument);
			continue;
		}
		if (argument === "--preset") {
			const presetValue = argv[index + 1];
			if (!presetValue || presetValue.startsWith("-")) throw new Error("[unrun] Missing preset value after --preset");
			preset = presetValue;
			beforeArgs.push(argument, presetValue);
			index += 1;
			continue;
		}
		if (argument.startsWith("-")) {
			beforeArgs.push(argument);
			continue;
		}
		filePath = argument;
	}
	return {
		debug,
		preset,
		filePath,
		beforeArgs,
		afterArgs
	};
}
async function runCLI() {
	let parsedArguments;
	try {
		parsedArguments = parseCLIArguments(process.argv.slice(2));
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
	if (!parsedArguments.filePath) {
		console.error("[unrun] No input files provided");
		process.exit(1);
	}
	process.argv = [
		process.argv[0],
		parsedArguments.filePath,
		...parsedArguments.afterArgs
	];
	try {
		const { unrunCli } = await import("./index.mjs");
		const cliResult = await unrunCli({
			path: parsedArguments.filePath,
			debug: parsedArguments.debug,
			preset: parsedArguments.preset
		}, parsedArguments.afterArgs);
		process.exit(cliResult.exitCode);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
}
runCLI().catch((error) => {
	console.error(error.message);
	process.exit(1);
});
//#endregion
export {};
