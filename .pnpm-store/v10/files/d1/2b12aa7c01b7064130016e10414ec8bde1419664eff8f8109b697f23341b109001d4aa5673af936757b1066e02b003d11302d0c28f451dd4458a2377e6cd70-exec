#!/usr/bin/env node

"use strict";

/**
 * @param {string} command process to run
 * @param {string[]} args command line arguments
 * @returns {Promise<void>} promise
 */
const runCommand = (command, args) => {
	const cp = require("child_process");

	return new Promise((resolve, reject) => {
		const executedCommand = cp.spawn(command, args, {
			stdio: "inherit",
			shell: true
		});

		executedCommand.on("error", (error) => {
			reject(error);
		});

		executedCommand.on("exit", (code) => {
			if (code === 0) {
				resolve();
			} else {
				reject();
			}
		});
	});
};

/**
 * @param {string} packageName name of the package
 * @returns {boolean} is the package installed?
 */
const isInstalled = (packageName) => {
	if (process.versions.pnp) {
		return true;
	}

	const path = require("path");
	const fs = require("graceful-fs");

	let dir = __dirname;

	do {
		try {
			if (
				fs.statSync(path.join(dir, "node_modules", packageName)).isDirectory()
			) {
				return true;
			}
		} catch (_error) {
			// Nothing
		}
	} while (dir !== (dir = path.dirname(dir)));

	// https://github.com/nodejs/node/blob/v18.9.1/lib/internal/modules/cjs/loader.js#L1274
	const { globalPaths } =
		/** @type {typeof import("module") & { globalPaths: string[] }} */
		(require("module"));

	for (const internalPath of globalPaths) {
		try {
			if (fs.statSync(path.join(internalPath, packageName)).isDirectory()) {
				return true;
			}
		} catch (_error) {
			// Nothing
		}
	}

	return false;
};

/**
 * @param {CliOption} cli options
 * @returns {void}
 */
const runCli = (cli) => {
	const path = require("path");

	const pkgPath = require.resolve(`${cli.package}/package.json`);

	/** @type {Record<string, EXPECTED_ANY> & { type: string, bin: Record<string, string> }} */
	const pkg = require(pkgPath);

	if (pkg.type === "module" || /\.mjs/i.test(pkg.bin[cli.binName])) {
		import(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName])).catch(
			(err) => {
				console.error(err);
				process.exitCode = 1;
			}
		);
	} else {
		require(path.resolve(path.dirname(pkgPath), pkg.bin[cli.binName]));
	}
};

/**
 * @typedef {object} CliOption
 * @property {string} name display name
 * @property {string} package npm package name
 * @property {string} binName name of the executable file
 * @property {boolean} installed currently installed?
 * @property {string} url homepage
 */

/** @type {CliOption} */
const cli = {
	name: "webpack-cli",
	package: "webpack-cli",
	binName: "webpack-cli",
	installed: isInstalled("webpack-cli"),
	url: "https://github.com/webpack/webpack-cli"
};

if (!cli.installed) {
	const path = require("path");
	const fs = require("graceful-fs");
	const readLine = require("readline");

	const notify = `CLI for webpack must be installed.\n  ${cli.name} (${cli.url})\n`;

	console.error(notify);

	/** @type {string | undefined} */
	let packageManager;

	if (fs.existsSync(path.resolve(process.cwd(), "yarn.lock"))) {
		packageManager = "yarn";
	} else if (fs.existsSync(path.resolve(process.cwd(), "pnpm-lock.yaml"))) {
		packageManager = "pnpm";
	} else {
		packageManager = "npm";
	}

	const installOptions = [packageManager === "yarn" ? "add" : "install", "-D"];

	console.error(
		`We will use "${packageManager}" to install the CLI via "${packageManager} ${installOptions.join(
			" "
		)} ${cli.package}".`
	);

	const question = "Do you want to install 'webpack-cli' (yes/no): ";

	const questionInterface = readLine.createInterface({
		input: process.stdin,
		output: process.stderr
	});

	// In certain scenarios (e.g. when STDIN is not in terminal mode), the callback function will not be
	// executed. Setting the exit code here to ensure the script exits correctly in those cases. The callback
	// function is responsible for clearing the exit code if the user wishes to install webpack-cli.
	process.exitCode = 1;
	questionInterface.question(question, (answer) => {
		questionInterface.close();

		const normalizedAnswer = answer.toLowerCase().startsWith("y");

		if (!normalizedAnswer) {
			console.error(
				"You need to install 'webpack-cli' to use webpack via CLI.\n" +
					"You can also install the CLI manually."
			);

			return;
		}
		process.exitCode = 0;

		console.log(
			`Installing '${
				cli.package
			}' (running '${packageManager} ${installOptions.join(" ")} ${
				cli.package
			}')...`
		);

		runCommand(
			/** @type {string} */
			(packageManager),
			[...installOptions, cli.package]
		)
			.then(() => {
				runCli(cli);
			})
			.catch((err) => {
				console.error(err);
				process.exitCode = 1;
			});
	});
} else {
	runCli(cli);
}
