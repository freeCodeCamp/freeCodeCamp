import { dirname, resolve } from 'pathe';
import { EvaluatedModules } from 'vite/module-runner';

// TODO: this is not needed in Vite 7.2+
class VitestEvaluatedModules extends EvaluatedModules {
	getModuleSourceMapById(id) {
		const map = super.getModuleSourceMapById(id);
		if (map != null && !("_patched" in map)) {
			map._patched = true;
			const dir = dirname(map.url);
			map.resolvedSources = (map.map.sources || []).map((s) => resolve(dir, s || ""));
		}
		return map;
	}
}

export { VitestEvaluatedModules as V };
