import fs from 'node:fs';
import { getTasks, getFullName, getTests } from '@vitest/runner/utils';
import * as pathe from 'pathe';
import c from 'tinyrainbow';
import { g as getStateSymbol, t as truncateString, F as F_RIGHT, D as DefaultReporter, f as formatProjectName } from './index.VByaPkjc.js';
import { stripVTControlCharacters } from 'node:util';
import { notNullish } from '@vitest/utils';

function createBenchmarkJsonReport(files) {
	const report = { files: [] };
	for (const file of files) {
		const groups = [];
		for (const task of getTasks(file)) if (task?.type === "suite") {
			const benchmarks = [];
			for (const t of task.tasks) {
				const benchmark = t.meta.benchmark && t.result?.benchmark;
				if (benchmark) benchmarks.push({
					id: t.id,
					...benchmark,
					samples: []
				});
			}
			if (benchmarks.length) groups.push({
				fullName: getFullName(task, " > "),
				benchmarks
			});
		}
		report.files.push({
			filepath: file.filepath,
			groups
		});
	}
	return report;
}
function flattenFormattedBenchmarkReport(report) {
	const flat = {};
	for (const file of report.files) for (const group of file.groups) for (const t of group.benchmarks) flat[t.id] = t;
	return flat;
}

const outputMap = /* @__PURE__ */ new WeakMap();
function formatNumber(number) {
	const res = String(number.toFixed(number < 100 ? 4 : 2)).split(".");
	return res[0].replace(/(?=(?:\d{3})+$)\B/g, ",") + (res[1] ? `.${res[1]}` : "");
}
const tableHead = [
	"name",
	"hz",
	"min",
	"max",
	"mean",
	"p75",
	"p99",
	"p995",
	"p999",
	"rme",
	"samples"
];
function renderBenchmarkItems(result) {
	return [
		result.name,
		formatNumber(result.hz || 0),
		formatNumber(result.min || 0),
		formatNumber(result.max || 0),
		formatNumber(result.mean || 0),
		formatNumber(result.p75 || 0),
		formatNumber(result.p99 || 0),
		formatNumber(result.p995 || 0),
		formatNumber(result.p999 || 0),
		`±${(result.rme || 0).toFixed(2)}%`,
		(result.sampleCount || 0).toString()
	];
}
function computeColumnWidths(results) {
	const rows = [tableHead, ...results.map((v) => renderBenchmarkItems(v))];
	return Array.from(tableHead, (_, i) => Math.max(...rows.map((row) => stripVTControlCharacters(row[i]).length)));
}
function padRow(row, widths) {
	return row.map((v, i) => i ? v.padStart(widths[i], " ") : v.padEnd(widths[i], " "));
}
function renderTableHead(widths) {
	return " ".repeat(3) + padRow(tableHead, widths).map(c.bold).join("  ");
}
function renderBenchmark(result, widths) {
	const padded = padRow(renderBenchmarkItems(result), widths);
	return [
		padded[0],
		c.blue(padded[1]),
		c.cyan(padded[2]),
		c.cyan(padded[3]),
		c.cyan(padded[4]),
		c.cyan(padded[5]),
		c.cyan(padded[6]),
		c.cyan(padded[7]),
		c.cyan(padded[8]),
		c.dim(padded[9]),
		c.dim(padded[10])
	].join("  ");
}
function renderTable(options) {
	const output = [];
	const benchMap = {};
	for (const task of options.tasks) if (task.meta.benchmark && task.result?.benchmark) benchMap[task.id] = {
		current: task.result.benchmark,
		baseline: options.compare?.[task.id]
	};
	const benchCount = Object.entries(benchMap).length;
	const columnWidths = computeColumnWidths(Object.values(benchMap).flatMap((v) => [v.current, v.baseline]).filter(notNullish));
	let idx = 0;
	const padding = "  ".repeat(1 );
	for (const task of options.tasks) {
		const duration = task.result?.duration;
		const bench = benchMap[task.id];
		let prefix = "";
		if (idx === 0 && task.meta?.benchmark) prefix += `${renderTableHead(columnWidths)}\n${padding}`;
		prefix += ` ${getStateSymbol(task)} `;
		let suffix = "";
		if (task.type === "suite") suffix += c.dim(` (${getTests(task).length})`);
		if (task.mode === "skip" || task.mode === "todo") suffix += c.dim(c.gray(" [skipped]"));
		if (duration != null) {
			const color = duration > options.slowTestThreshold ? c.yellow : c.green;
			suffix += color(` ${Math.round(duration)}${c.dim("ms")}`);
		}
		if (options.showHeap && task.result?.heap != null) suffix += c.magenta(` ${Math.floor(task.result.heap / 1024 / 1024)} MB heap used`);
		if (bench) {
			let body = renderBenchmark(bench.current, columnWidths);
			if (options.compare && bench.baseline) {
				if (bench.current.hz) {
					const diff = bench.current.hz / bench.baseline.hz;
					const diffFixed = diff.toFixed(2);
					if (diffFixed === "1.0.0") body += c.gray(`  [${diffFixed}x]`);
					if (diff > 1) body += c.blue(`  [${diffFixed}x] ⇑`);
					else body += c.red(`  [${diffFixed}x] ⇓`);
				}
				output.push(padding + prefix + body + suffix);
				const bodyBaseline = renderBenchmark(bench.baseline, columnWidths);
				output.push(`${padding}   ${bodyBaseline}  ${c.dim("(baseline)")}`);
			} else {
				if (bench.current.rank === 1 && benchCount > 1) body += c.bold(c.green("   fastest"));
				if (bench.current.rank === benchCount && benchCount > 2) body += c.bold(c.gray("   slowest"));
				output.push(padding + prefix + body + suffix);
			}
		} else output.push(padding + prefix + task.name + suffix);
		if (task.result?.state !== "pass" && outputMap.get(task) != null) {
			let data = outputMap.get(task);
			if (typeof data === "string") {
				data = stripVTControlCharacters(data.trim().split("\n").filter(Boolean).pop());
				if (data === "") data = void 0;
			}
			if (data != null) {
				const out = `   ${"  ".repeat(options.level)}${F_RIGHT} ${data}`;
				output.push(c.gray(truncateString(out, options.columns)));
			}
		}
		idx++;
	}
	return output.filter(Boolean).join("\n");
}

class BenchmarkReporter extends DefaultReporter {
	compare;
	async onInit(ctx) {
		super.onInit(ctx);
		if (this.ctx.config.benchmark?.compare) {
			const compareFile = pathe.resolve(this.ctx.config.root, this.ctx.config.benchmark?.compare);
			try {
				this.compare = flattenFormattedBenchmarkReport(JSON.parse(await fs.promises.readFile(compareFile, "utf-8")));
			} catch (e) {
				this.error(`Failed to read '${compareFile}'`, e);
			}
		}
	}
	onTaskUpdate(packs) {
		for (const pack of packs) {
			const task = this.ctx.state.idMap.get(pack[0]);
			if (task?.type === "suite" && task.result?.state !== "run") task.tasks.filter((task) => task.result?.benchmark).sort((benchA, benchB) => benchA.result.benchmark.mean - benchB.result.benchmark.mean).forEach((bench, idx) => {
				bench.result.benchmark.rank = Number(idx) + 1;
			});
		}
	}
	onTestSuiteResult(testSuite) {
		super.onTestSuiteResult(testSuite);
		this.printSuiteTable(testSuite);
	}
	printTestModule(testModule) {
		this.printSuiteTable(testModule);
	}
	printSuiteTable(testTask) {
		const state = testTask.state();
		if (state === "pending" || state === "queued") return;
		const benches = testTask.task.tasks.filter((t) => t.meta.benchmark);
		const duration = testTask.task.result?.duration || 0;
		if (benches.length > 0 && benches.every((t) => t.result?.state !== "run" && t.result?.state !== "queued")) {
			let title = `\n ${getStateSymbol(testTask.task)} ${formatProjectName(testTask.project)}${getFullName(testTask.task, c.dim(" > "))}`;
			if (duration != null && duration > this.ctx.config.slowTestThreshold) title += c.yellow(` ${Math.round(duration)}${c.dim("ms")}`);
			this.log(title);
			this.log(renderTable({
				tasks: benches,
				level: 1,
				columns: this.ctx.logger.getColumns(),
				compare: this.compare,
				showHeap: this.ctx.config.logHeapUsage,
				slowTestThreshold: this.ctx.config.slowTestThreshold
			}));
		}
	}
	async onFinished(files = this.ctx.state.getFiles(), errors = this.ctx.state.getUnhandledErrors()) {
		super.onFinished(files, errors);
		// write output for future comparison
		let outputFile = this.ctx.config.benchmark?.outputJson;
		if (outputFile) {
			outputFile = pathe.resolve(this.ctx.config.root, outputFile);
			const outputDirectory = pathe.dirname(outputFile);
			if (!fs.existsSync(outputDirectory)) await fs.promises.mkdir(outputDirectory, { recursive: true });
			const output = createBenchmarkJsonReport(files);
			await fs.promises.writeFile(outputFile, JSON.stringify(output, null, 2));
			this.log(`Benchmark report written to ${outputFile}`);
		}
	}
}

class VerboseBenchmarkReporter extends BenchmarkReporter {
	verbose = true;
}

const BenchmarkReportsMap = {
	default: BenchmarkReporter,
	verbose: VerboseBenchmarkReporter
};

export { BenchmarkReporter as B, VerboseBenchmarkReporter as V, BenchmarkReportsMap as a };
