import { promises, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { gzip, constants } from 'node:zlib';
import { stringify } from 'flatted';
import { resolve, dirname, relative } from 'pathe';
import { globSync } from 'tinyglobby';
import c from 'tinyrainbow';

function getTestFileEnvironment(project, testFile, browser = false) {
	if (browser) {
		return project.browser?.vite.environments.client;
	} else {
		for (const name in project.vite.environments) {
			const env = project.vite.environments[name];
			if (env.moduleGraph.getModuleById(testFile)) {
				return env;
			}
		}
	}
}

async function getModuleGraph(ctx, projectName, testFilePath, browser = false) {
	const graph = {};
	const externalized = new Set();
	const inlined = new Set();
	const project = ctx.getProjectByName(projectName);
	const environment = project.config.experimental.viteModuleRunner === false ? project.vite.environments.__vitest__ : getTestFileEnvironment(project, testFilePath, browser);
	if (!environment) {
		throw new Error(`Cannot find environment for ${testFilePath}`);
	}
	const seen = new Map();
	function get(mod) {
		if (!mod || !mod.id) {
			return;
		}
		if (mod.id === "\0vitest/browser" || mod.id.includes("plugin-vue:export-helper")) {
			return;
		}
		if (seen.has(mod)) {
			return seen.get(mod);
		}
		const id = clearId(mod.id);
		seen.set(mod, id);
		if (id.startsWith("__vite-browser-external:")) {
			const external = id.slice("__vite-browser-external:".length);
			externalized.add(external);
			return external;
		}
		const external = project._resolver.wasExternalized(id);
		if (typeof external === "string") {
			externalized.add(external);
			return external;
		}
		if (browser && mod.file?.includes(project.browser.vite.config.cacheDir)) {
			externalized.add(mod.id);
			return id;
		}
		inlined.add(id);
		const mods = Array.from(mod.importedModules).filter((i) => i.id && !i.id.includes("/vitest/dist/"));
		graph[id] = mods.map((m) => get(m)).filter(Boolean);
		return id;
	}
	get(environment.moduleGraph.getModuleById(testFilePath));
	project.config.setupFiles.forEach((setupFile) => {
		get(environment.moduleGraph.getModuleById(setupFile));
	});
	return {
		graph,
		externalized: Array.from(externalized),
		inlined: Array.from(inlined)
	};
}
function clearId(id) {
	return id?.replace(/\?v=\w+$/, "") || "";
}

function getOutputFile(config) {
	if (!config?.outputFile) {
		return;
	}
	if (typeof config.outputFile === "string") {
		return config.outputFile;
	}
	return config.outputFile.html;
}
const distDir = resolve(fileURLToPath(import.meta.url), "../../dist");
class HTMLReporter {
	start = 0;
	ctx;
	options;
	reporterDir;
	htmlFilePath;
	constructor(options) {
		this.options = options;
	}
	async onInit(ctx) {
		this.ctx = ctx;
		this.start = Date.now();
		const htmlFile = this.options.outputFile || getOutputFile(this.ctx.config) || "html/index.html";
		const htmlFilePath = resolve(this.ctx.config.root, htmlFile);
		this.reporterDir = dirname(htmlFilePath);
		this.htmlFilePath = htmlFilePath;
		await promises.mkdir(resolve(this.reporterDir, "assets"), { recursive: true });
	}
	async onTestRunEnd() {
		const result = {
			paths: this.ctx.state.getPaths(),
			files: this.ctx.state.getFiles(),
			config: this.ctx.serializedRootConfig,
			unhandledErrors: this.ctx.state.getUnhandledErrors(),
			moduleGraph: {},
			sources: {}
		};
		const promises$1 = [];
		promises$1.push(...result.files.map(async (file) => {
			const projectName = file.projectName || "";
			const resolvedConfig = this.ctx.getProjectByName(projectName).config;
			const browser = resolvedConfig.browser.enabled;
			result.moduleGraph[projectName] ??= {};
			result.moduleGraph[projectName][file.filepath] = await getModuleGraph(this.ctx, projectName, file.filepath, browser);
			if (!result.sources[file.filepath]) {
				try {
					result.sources[file.filepath] = await promises.readFile(file.filepath, { encoding: "utf-8" });
				} catch {}
			}
		}));
		await Promise.all(promises$1);
		await this.writeReport(stringify(result));
	}
	async writeReport(report) {
		const metaFile = resolve(this.reporterDir, "html.meta.json.gz");
		const promiseGzip = promisify(gzip);
		const data = await promiseGzip(report, { level: constants.Z_BEST_COMPRESSION });
		await promises.writeFile(metaFile, data, "base64");
		const ui = resolve(distDir, "client");
		// copy ui
		const files = globSync(["**/*"], {
			cwd: ui,
			expandDirectories: false
		});
		await Promise.all(files.map(async (f) => {
			if (f === "index.html") {
				const html = await promises.readFile(resolve(ui, f), "utf-8");
				const filePath = relative(this.reporterDir, metaFile);
				await promises.writeFile(this.htmlFilePath, html.replace("<!-- !LOAD_METADATA! -->", `<script>window.METADATA_PATH="${filePath}"<\/script>`));
			} else {
				await promises.copyFile(resolve(ui, f), resolve(this.reporterDir, f));
			}
		}));
		// copy attachments
		// TODO: unify attachmentsDir and html outputFile, so both live together without extra copy
		if (existsSync(this.ctx.config.attachmentsDir)) {
			const destAttachmentsDir = resolve(this.reporterDir, "data");
			await promises.rm(destAttachmentsDir, {
				recursive: true,
				force: true
			});
			await promises.mkdir(destAttachmentsDir, { recursive: true });
			await promises.cp(this.ctx.config.attachmentsDir, destAttachmentsDir, { recursive: true });
		}
		this.ctx.logger.log(`${c.bold(c.inverse(c.magenta(" HTML ")))} ${c.magenta("Report is generated")}`);
		this.ctx.logger.log(`${c.dim("       You can run ")}${c.bold(`npx vite preview --outDir ${relative(this.ctx.config.root, this.reporterDir)}`)}${c.dim(" to see the test results.")}`);
	}
	async onFinishedReportCoverage() {
		if (this.ctx.config.coverage.enabled && this.ctx.config.coverage.htmlDir) {
			const coverageHtmlDir = this.ctx.config.coverage.htmlDir;
			const destCoverageDir = resolve(this.reporterDir, "coverage");
			if (coverageHtmlDir === destCoverageDir) {
				// skip and preserve already generated coverage report.
				// this can happen when users configures `outputFile`
				// next to `coverage.reportsDirectory`.
				return;
			}
			await promises.rm(destCoverageDir, {
				recursive: true,
				force: true
			});
			await promises.mkdir(destCoverageDir, { recursive: true });
			await promises.cp(coverageHtmlDir, destCoverageDir, { recursive: true });
		}
	}
}

export { HTMLReporter as default };
