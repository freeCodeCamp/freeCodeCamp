import { createRequire as __cjs_createRequire } from "node:module";
const __cjs_require = __cjs_createRequire(import.meta.url);
import { s as resolveComma, u as toArray } from "./general-D3muxt2f.mjs";
const minVersion = __cjs_require("semver/ranges/min-version.js");
//#region src/features/target.ts
const BASELINE_WIDELY_AVAILABLE_TARGET = [
	"chrome111",
	"edge111",
	"firefox114",
	"safari16.4",
	"ios16.4"
];
function expandBaselineTarget(targets) {
	return targets.flatMap((t) => t === "baseline-widely-available" ? BASELINE_WIDELY_AVAILABLE_TARGET : t);
}
function resolveTarget(logger, target, color, pkg, nameLabel) {
	if (target === false) return;
	if (target == null) {
		const pkgTarget = resolvePackageTarget(pkg);
		if (pkgTarget) target = pkgTarget;
		else return;
	}
	if (typeof target === "number") throw new TypeError(`Invalid target: ${target}`);
	const targets = expandBaselineTarget(resolveComma(toArray(target)));
	if (targets.length) logger.info(nameLabel, `target${targets.length > 1 ? "s" : ""}: ${color(targets.join(", "))}`);
	return targets;
}
function resolvePackageTarget(pkg) {
	const nodeVersion = pkg?.engines?.node;
	if (!nodeVersion) return;
	const nodeMinVersion = minVersion(nodeVersion);
	if (!nodeMinVersion) return;
	if (nodeMinVersion.version === "0.0.0") return;
	return `node${nodeMinVersion.version}`;
}
//#endregion
export { resolveTarget as n, expandBaselineTarget as t };
